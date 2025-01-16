
import { useState } from 'react'


import styled from 'styled-components'
import { useSnapshot } from 'valtio'
import { state } from '../state'
import { StyledH3 } from './Styled'
import { X } from 'react-feather'


const StyledContainer = styled.div`
  height: 100%;
  width: 100%;
`
const StyledForm = styled.form`
  position: absolute;
  bottom: 50px;
  display: none;
`

const Styledheader = styled.div`
  display: flex;
  padding: 12px 12px;
  position: absolute;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  border-bottom: 1px solid var(--hubspot-accent-color);
`

const ChatContainer = styled.div`
  position: absolute;
  height: 95vh;
  top: var(--layout-nav-height);
  right: 0;
  width: 400px;
  background-color: var(--core-container-color);
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border: 1px solid var(--hubspot-accent-color);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;
  z-index: 10;
  &.active {
    transform: translateX(0%);
  }
`
const ExitButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    color: var(--core-text-color-inverse);
    border: 0;
    padding: 4px;
    border-radius: 100%;
    &:hover {
        cursor: pointer;
        background: var(--core-background-color);
    }
`

export default function Chat() {
    const snap = useSnapshot(state, { sync: true })

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

    const handleExit = () => {
        state.chatOpen = false
    }

    // const botMessage = messages.filter(message => message.role != 'user').pop()?.content || ':)';

    return (
        <ChatContainer className={snap.chatOpen ? 'active' : ''}>
            <Styledheader>
                <StyledH3>New Chat</StyledH3>
                <ExitButton aria-label='close chat' onClick={handleExit}><X /></ExitButton>
            </Styledheader>
            <StyledContainer>
                <StyledForm onSubmit={handleSubmit} style={{ display: 'flex' }}>
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
        </ChatContainer>

    );
}