import { createLazyFileRoute, Link } from '@tanstack/react-router'
import { StyledH1, StyledH2 } from '../components/Styled'

import styled from 'styled-components'
import { useState } from 'react'


export const Route = createLazyFileRoute('/')({
  component: RouteComponent,
})

const Header = styled.section`
  display: flex;
  height: 200px;
  width: 100%;
  background-color: var(--core-background-color);
  border-bottom: 1px solid var(--hubspot-secondary-color);
  color: var(--core-text-color-inverse);
`
const NavTabs = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: auto;
`
const NavButton = styled.button`
  font-weight: 400;
  background-color: transparent;
  color: var(--core-text-color-inverse);
  border: 0;
  padding: 20px;
  &:hover {
    cursor: pointer;
  }
  &.active {
    border-bottom: 3px solid  var(--core-text-color-inverse);
  }
`

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 1376px;
  width: 100%;
`

function RouteComponent() {
  const [activeTab, setActiveTab] = useState('intro');

  const handleClick = (tab: string) => {
    setActiveTab(tab)
  }

  return (
    <div>
      <Header>
        <InnerContainer>
          <StyledH2>Hi Hubspot!</StyledH2>
          <NavTabs>
            <NavButton className={activeTab === 'intro' ? 'active' : ''} onClick={() => { handleClick('intro') }}>Getting Started</NavButton>
            <NavButton className={activeTab === 'resume' ? 'active' : ''} onClick={() => { handleClick('resume') }}>Resume</NavButton>
          </NavTabs>
        </InnerContainer>
      </Header>
      <section>
        <InnerContainer>
          {activeTab === 'intro' ?
            (<div>
              <StyledH1 className='special-gradient'>Meet Lucas</StyledH1>
              <p>Lorem ipsum dolor ests</p>
            </div>) :
            (<div>resume</div>)}

        </InnerContainer>
      </section>
    </div>
  )
}
