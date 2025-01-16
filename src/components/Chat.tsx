import { useState } from 'react'

import styled from 'styled-components'
import { useSnapshot } from 'valtio'
import { state } from '../state'
import { StyledH3 } from './Styled'
import { X } from 'react-feather'


const StyledContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
`
const StyledForm = styled.form`
    display: flex;
    width: 100%;
    /* margin-bottom: 30px; */
    input {
        height: 100px;
        padding: 0px 20px;
        border: 0;
        border-top: 1px solid var(--hubspot-accent-color);
        border-bottom-left-radius: var( --core-border-radius);
        border-bottom-right-radius: var( --core-border-radius);
        background-color: var(--hubspot-secondary-color);
        flex: 1;
        &::placeholder {
            color: white;
        }
    }
`
const StyledChatScrollable = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    overflow-y: auto;
    max-width: 600px;
    padding: 20px;
    
`
const Styledheader = styled.div`
  display: flex;
  padding: 20px;
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
  background-color: var(--hubspot-bg-color-bg);
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border: 1px solid var(--hubspot-accent-color);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;
  z-index: 10;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
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

const ChatBubble = styled.div<{ $role: string }>`
    display: flex;
    flex-direction: column;
    width: fit-content;
    margin-bottom: 10px;
    align-self: ${({ $role }) => $role === 'user' ? 'end' : 'start'};
    text-align: ${({ $role }) => $role === 'user' ? 'right' : 'left'};
    background-color: ${({ $role }) => $role === 'user' ? '#007bff' : '#28a745'};
    color: var(--core-text-color-light);
    padding: 10px;
    border-radius: var(--core-border-radius);
`

export default function Chat() {
    const snap = useSnapshot(state, { sync: true })

    const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
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

    return (
        <ChatContainer className={snap.chatOpen ? 'active' : ''}>
            <Styledheader>
                <StyledH3>
                    {isLoading ? 'Thinking...' : 'New Chat'}
                </StyledH3>
                <ExitButton aria-label='close chat' onClick={handleExit}><X /></ExitButton>
            </Styledheader>
            <StyledContainer>
                <StyledChatScrollable>
                    {/* Todo: clean this up */}
                    {(messages).map((message: { role: string; content: string | number | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<unknown>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }, index: React.Key | null | undefined) => (
                        <ChatBubble key={index} $role={message.role}>
                            {message.content}
                        </ChatBubble>
                    ))}
                </StyledChatScrollable>
                <StyledForm onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Type your message..."
                    />
                </StyledForm>
            </StyledContainer>
        </ChatContainer>

    );
}