import { OrbitControls, RoundedBox, useEnvironment } from "@react-three/drei"
import { useLoader } from "@react-three/fiber"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
// import { TextureLoader } from 'three/examples/jsm/loaders/TextureLoader'
import * as THREE from "three"
import { useControls } from 'leva'
import { Model } from './Model.jsx'
 
function ReflectiveBox(){
  const tweakableProperties = useControls({
    roughness: { value: 0.1, min: 0, max: 1},
    metalness: { value: 1, min: 0, max: 1}
  })

  const normalMap = useLoader(THREE.TextureLoader, "./Textures/waternormals.jpeg")

  const envMap = useEnvironment({ path: './Environments/1'})

  const model = useLoader(GLTFLoader, './models/LeePerrySmith/LeePerrySmith.glb')

 

  return (
    <>
      <RoundedBox
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