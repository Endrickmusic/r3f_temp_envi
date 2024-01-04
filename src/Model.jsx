import React from "react";
import { useGLTF } from "@react-three/drei";
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

    const mapTexture = useLoader(TextureLoader, '/models/LeePerrySmith/color.jpg')
    const normalTexture = useLoader(TextureLoader, '/models/LeePerrySmith/normal.jpg')
    const { nodes } = useGLTF("./models/LeePerrySmith/LeePerrySmith.glb")

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LeePerrySmith.geometry}
        position={[ 1, 0, 0]}
        scale={0.3}
        rotation={[0, 0.2*Math.PI, 0]}
        >
        <meshStandardMaterial 
        onBeforeCompile = { onBeforeCompile }
        map = { mapTexture }
        normalMap = { normalTexture }
        roughness = { 0.3 }
        metalness = { 1 }
        />
      </mesh>
      
    </group>
  );
}

useGLTF.preload("./models/LeePerrySmith/LeePerrySmith.glb");