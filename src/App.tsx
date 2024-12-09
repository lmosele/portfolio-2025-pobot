import { Suspense, useEffect, useState } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { useGLTF, OrbitControls, Stage, CameraShake, useAnimations, Html, Text, MeshDistortMaterial } from '@react-three/drei'
import styled from 'styled-components'


const StyledContainer = styled.div`
  height: 100%;
`
const StyledForm = styled.form`
  position: absolute;
  bottom: 50px;
`

// http://drei.docs.pmnd.rs/misc/html#html
const Box = ({ children }) => {
  const [size, set] = useState(0.5)
  const controls = useThree((state) => state.controls)
  return (
    <mesh scale={size * 4}>
      <planeGeometry />
      <meshToonMaterial emissive={'#19ffaf'} />
      <Html occlude distanceFactor={1.8} position={[0, 0, 0.13]} transform>
        {children}
      </Html>
      
    </mesh>
  )
}

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

  return (
    <StyledContainer>
      <Canvas camera={{ position: [2, 1, 5], fov: 25 }}>
      
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 5]} />
        <pointLight position={[-10, -10, -10]} />
        <Box>
          <div className='fooo' style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
            <div>
              {(messages as any).map((message: { role: string; content: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }, index: React.Key | null | undefined) => (
                <div key={index} style={{ marginBottom: '10px', textAlign: message.role === 'user' ? 'right' : 'left' }}>
                  <span style={{ background: message.role === 'user' ? '#007bff' : '#28a745', color: 'white', padding: '5px 10px', borderRadius: '20px', display: 'inline-block' }}>
                    {message.content}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Box>
        <OrbitControls makeDefault />
      </Canvas>
      <StyledForm onSubmit={handleSubmit} style={{ display: 'flex' }}>
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