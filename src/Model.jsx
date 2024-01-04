import React from "react";
import { useGLTF, useEnvironment } from "@react-three/drei";
import { useLoader, useFrame } from '@react-three/fiber'
import { TextureLoader } from '/node_modules/three/src/loaders/TextureLoader'


export function Model(props) {

   const customUniforms = {
        uTime: { value: 0 }
    }

    useFrame(() => {
      customUniforms.uTime.value += 0.01
    })

    const onBeforeCompile = (shader) => 
    {
    shader.uniforms.uTime = customUniforms.uTime

    shader.vertexShader = shader.vertexShader.replace(
        '#include <common>',
        `
            #include <common>

            uniform float uTime;

            mat2 get2dRotateMatrix(float _angle)
            {
                return mat2(cos(_angle), - sin(_angle), sin(_angle), cos(_angle));
            }
        `
        )

    shader.vertexShader = shader.vertexShader.replace(
            '#include <beginnormal_vertex>',
            `
                #include <beginnormal_vertex>
    
                float angle = sin(position.y + uTime) * 0.2;
                mat2 rotateMatrix = get2dRotateMatrix(angle);
    
                objectNormal.xz = rotateMatrix * objectNormal.xz;
            `
        )

      shader.vertexShader = shader.vertexShader.replace(
        '#include <begin_vertex>',
        `
            #include <begin_vertex>

            transformed.xz = rotateMatrix * transformed.xz;
        `
     )
    }

    const normalTexture = useLoader(TextureLoader, './Textures/waternormals.jpeg')
    const envMap = useEnvironment({files : './Environments/field_2k.hdr'})

  return (
    <group {...props} dispose={null}>
      <mesh
      scale = {0.2}
      rotation = { [-0.2*Math.PI, 0.1*Math.PI, 0] }
      >
       
        <planeGeometry
        args ={[16, 16, 128, 128]}
        
        />
        <meshStandardMaterial 
        onBeforeCompile = { onBeforeCompile }
        envMap = { envMap }
        normalMap = { normalTexture }
        roughness = { 0.1 }
        metalness = { 1 }
        />
      </mesh>
      
    </group>
  );
}

useGLTF.preload("./models/LeePerrySmith/LeePerrySmith.glb");