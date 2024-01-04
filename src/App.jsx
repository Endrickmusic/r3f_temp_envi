import { useState } from 'react'
import Logo from '/face-blowing-a-kiss.svg'
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import Experience from "./Experience.jsx";
import { Model } from "./Model.jsx"
import './index.css'

export default function App() {
  
  const [count, setCount] = useState(0)

 return (


    <Canvas shadows camera={{ position: [2, 2, 7], fov: 40 }}>
      <ambientLight 
        intensity = { 0.1}
      />
      <pointLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-3, -3, 2]} />
      <Environment
        files = "./Environments/field_2k.hdr"
         
        />
        <Model />
    </Canvas>
  
  );
}

