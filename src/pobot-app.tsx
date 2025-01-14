import * as THREE from 'three'
import { Suspense, useEffect, useRef, useState } from 'react'
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber'
import { useGLTF, OrbitControls, Stage, CameraShake, useAnimations, Html, Text, MeshDistortMaterial, useFBX, Center, AccumulativeShadows, RandomizedLight } from '@react-three/drei'
import { easing } from 'maath'


import styled from 'styled-components'

const StyledContainer = styled.div`
  height: 100%;
`
const StyledForm = styled.form`
  position: absolute;
  bottom: 50px;
  display: none;
`

function Box({ text }) {
  const { scene } = useGLTF('./pobot2.glb');

  const headRef = useRef();
  const dummy = new THREE.Object3D();
  const headPosition = new THREE.Vector3();

  useEffect(() => {
    scene.rotation.set(0, -0.5, 0); // Example: Rotate 90 degrees around Y-axis
    const headNode = scene.getObjectByName('Head'); // Replace 'Head' with the part's name
    if (headNode) {
      headRef.current = headNode;
    }
  }, [scene]);

  // scene.position.set(-2, 0, 0);

  useFrame((state, dt) => {
    // const { viewport } = state; // Access viewport dimensions

    if (headRef.current) {
      // Calculate a lookAt target based on the normalized mouse position
      dummy.setRotationFromAxisAngle({ x: 0, y: state.pointer.x, z: state.pointer.y }, 0.9)
      // Smoothly adjust the head's quaternion to match the dummy's quaternion
      easing.dampQ(headRef.current.quaternion, dummy.quaternion, 0.3, dt);
    }

  });

  return (
    <>
      <primitive scale={0.2} object={scene} castShadow>
        <Text
          position={headPosition} // Adjust the position of the text relative to the scene
          fontSize={0.5}       // Adjust font size
          color="white"        // Text color
        >
          {text}
        </Text>
        {headRef.current && (
          <primitive
            object={headRef.current}
            castShadow
          />
        )}
      </primitive>

    </>
  );
}



// http://drei.docs.pmnd.rs/misc/html#html
// const Box = ({ children }) => {
//   const mesh = useRef()
//   const [dummy] = useState(() => new THREE.Object3D())
//   useFrame((state, dt) => {
//     dummy.lookAt(state.pointer.x * 10, state.pointer.y * 10, 1)
//     easing.dampQ(mesh.current.quaternion, dummy.quaternion, 0.15, dt)
//   })
//   return (
//     <mesh ref={mesh} >
//       <boxGeometry />
//       <meshNormalMaterial />
//       <Html occlude distanceFactor={1.8} position={[0, 0, 0.51]} transform>
//         {children}
//       </Html>

//     </mesh>
//   )
// }

export default function App() {
  const [messages, setMessages]: any = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: any = { role: 'user', content: input };
    setMessages((prevMessages: any) => [...prevMessages, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/.netlify/functions/chat', {
        method: 'POST',
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setMessages((prevMessages: any) => [...prevMessages, data]);
    } catch (error) {
      console.error('Error:', error);
      setMessages((prevMessages: any) => [...prevMessages, { role: 'system', content: 'Sorry, an error occurred. Please try again.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const botMessage = messages.filter(message => message.role != 'user').pop()?.content || ':)';

  return (
    <StyledContainer>
      <Canvas shadows camera={{ position: [0, 0, 0], fov: 20 }} gl={{ preserveDrawingBuffer: true }} >
        <ambientLight intensity={0.5 * Math.PI} />
        <CameraRig scene>
          <Center>
            <Box text={''} />
          </Center>
        </CameraRig>
      </Canvas>
      <StyledForm onSubmit={handleSubmit} style={{ display: 'flex' }}>
        {/* <div className='fooo' style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
          <div>
            {(messages as any).map((message: { role: string; content: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }, index: React.Key | null | undefined) => (
              <div key={index} style={{ marginBottom: '10px', textAlign: message.role === 'user' ? 'right' : 'left' }}>
                <span style={{ background: message.role === 'user' ? '#007bff' : '#28a745', color: 'white', padding: '5px 10px', borderRadius: '20px', display: 'inline-block' }}>
                  {message.content}
                </span>
              </div>
            ))}
          </div>
        </div> */}
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          style={{ flex: 1, marginRight: '10px', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <button type="submit" disabled={isLoading} style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          {isLoading ? 'Sending...' : 'Send'}
        </button>
      </StyledForm>
    </StyledContainer>
  );
}


function CameraRig({ children, scene }) {
  const group = useRef()
  useFrame((state, delta) => {
    // easing.damp3(state.camera.position, [-scene.viewport.width / 4 : 0, 0, 2], 0.25, delta)
    // easing.dampE(group.current.rotation, [scene.pointer.y / 10, -scene.pointer.x / 5, 0], 0.25, delta)
  })
  return <group ref={group}>{children}</group>
}