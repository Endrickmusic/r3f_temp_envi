import { useRef } from 'react'
import { OrbitControls, RoundedBox, useEnvironment } from "@react-three/drei"
import { useLoader, useFrame } from "@react-three/fiber"
import * as THREE from "three"
import { useControls } from 'leva'
 
function ReflectiveBox(){
  const tweakableProperties = useControls({
    roughness: { value: 0.1, min: 0, max: 1},
    metalness: { value: 1, min: 0, max: 1}
  })

  const normalMap = useLoader(THREE.TextureLoader, "./Textures/waternormals.jpeg")

  const envMap = useEnvironment({ path: './Environments/1'})

  const boxRef = useRef()

  useFrame(() => {
      boxRef.current.rotation.x = boxRef.current.rotation.y += 0.002
    })

  return (
    <>
      <RoundedBox
      ref = { boxRef }
      radius={0.01}
      position = {[ -2, 0, 1]}
      >
        <meshStandardMaterial 
          // metalness={ metalness }
          // roughness={ roughness }
          {...tweakableProperties}
          envMap = { envMap }
          normalMap = { normalMap }
        />
      </RoundedBox>
 </>
  )
} 

export default function Experience(){

  

  return (
    <>
      <OrbitControls />       
      <ReflectiveBox />
    </>
  )}