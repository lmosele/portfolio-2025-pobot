import { createLazyFileRoute, Link } from '@tanstack/react-router'
import { AccentButton, Header, InnerContainer, InverseButton, NavButton, NavTabs, SpecialSection, StyledH1, StyledH2, StyledH3, Text, Tile, TileColumn, TileRow, Wrap } from '../components/Styled'

import styled from 'styled-components'
import { useState } from 'react'
import { Timeline } from '../components/Timeline'
import { events } from '../resume'
import { Zap } from 'react-feather'
import Chat from '../components/Chat'


export const Route = createLazyFileRoute('/')({
  component: RouteComponent,
})



function RouteComponent() {
  const [activeTab, setActiveTab] = useState('intro');

  const handleClick = (tab: string) => {
    setActiveTab(tab)
  }

  return (
    <div>
      <Header>
        <InnerContainer>
          <StyledH2>Lucas Mosele</StyledH2>
          <NavTabs>
            <NavButton className={activeTab === 'intro' ? 'active' : ''} onClick={() => { handleClick('intro') }}>Getting Started</NavButton>
            <NavButton className={activeTab === 'resume' ? 'active' : ''} onClick={() => { handleClick('resume') }}>Resume</NavButton>
          </NavTabs>
        </InnerContainer>
      </Header>
      <SpecialSection>
        <InnerContainer>
          {activeTab === 'intro' ?
            (
              <Wrap>
                <StyledH1 className='special-gradient'>Hi Hubspot!</StyledH1>
                <Text>
                  I'm an interdisciplinary designer and developer with a focus on systems design, application architecture, user-centric design, and design mentorship. I bring 10+ years of experience in product design and front-end software development.
                </Text>
                <TileRow>
                  <Tile>
                    <StyledH3>Try Pobot</StyledH3>
                    <Text>Get more done with a virtual Lucas that works with you help hire him.</Text>
                    <AccentButton><Zap size={'16px'} />Try Now!</AccentButton>
                  </Tile>
                  <Tile>
                    <StyledH3>Projects</StyledH3>
                    <Text>See some of the projects I'm able to share publically</Text>
                    <InverseButton>See Portfolio</InverseButton>
                  </Tile>
                  <Tile>
                    <StyledH3>Inspect Site</StyledH3>
                    <Text>Navigate to Github to check out this portfolio's source code.</Text>
                    <InverseButton>See Portfolio</InverseButton>
                  </Tile>
                </TileRow>
              </Wrap>
            ) :
            (<div>
              <Timeline events={events} />
            </div>)}
        </InnerContainer>
      </SpecialSection>
      <Chat />
      <section>
        <InnerContainer>
          <TileColumn>
            <StyledH2>Posts</StyledH2>
            <Tile>
              <StyledH3>The Purpose of A System Is What It Does</StyledH3>
              <Text>How unclear rulesets prevent meaningful impact across an organization, design systems, and applications.</Text>
              <a href="https://lucasmosele.notion.site/The-Purpose-of-A-System-Is-What-It-Does-13fc61bf8e7b806482acc80d455732c3">
                <InverseButton>Read More</InverseButton>
              </a>
            </Tile>
            <Tile>
              <StyledH3>The Hot Potato Problem: How Do You Recruit A “UX Developer”?</StyledH3>
              <Text>Hiring "UX Developers" is a challenge for companies due to their unique mix of skills. Traditional hiring frameworks often struggle to accommodate these skillsets, leaving businesses at a crossroads in defining their roles.</Text>
              <a href="https://lucasmosele.notion.site/The-Hot-Potato-Problem-How-Do-You-Recruit-A-UX-Developer-138c61bf8e7b80e88e81d4ea30a54898">
                <InverseButton>Read More</InverseButton>
              </a>
            </Tile>
            <Tile>
              <StyledH3>The Case Against Pair Coding Interviews</StyledH3>
              <Text>Pair coding interviews often create unnecessary stress and fail to reflect real-world workflows, potentially disadvantaging qualified candidates. Alternative methods, like collaborative take-home project reviews, offer a better way to assess skills and teamwork.</Text>
              <a href="https://lucasmosele.medium.com/the-case-against-pair-coding-interviews-7d47253892ba">
                <InverseButton>Read More</InverseButton>
              </a>
            </Tile>
            <Tile>
              <StyledH3>The Process Behind Our End of Year Report</StyledH3>
              <Text>A brief overview of how Maxwell's End of Year Report was designed and built.</Text>
              <a href="https://lucasmosele.medium.com/the-process-behind-our-end-of-year-report-bc6a71b0aca6">
                <InverseButton>Read More</InverseButton>
              </a>
            </Tile>
          </TileColumn>
        </InnerContainer>
      </section>

    </div>
  )
}
