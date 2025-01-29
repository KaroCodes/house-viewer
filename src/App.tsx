
import { Canvas, useLoader } from '@react-three/fiber'
import './App.css'
import { OrbitControls } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/Addons.js'

function App() {
    const gltf = useLoader(GLTFLoader, '/malabar.gltf')

    return (
        <Canvas camera={{ position: [0, 20, 0] }}>
            <ambientLight intensity={Math.PI / 2} />
            {/* <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
            <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} /> */}
            <primitive object={gltf.scene} />
            <OrbitControls/>
        </Canvas> 
    )
}

export default App
