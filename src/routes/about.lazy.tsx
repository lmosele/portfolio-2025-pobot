import { createLazyFileRoute } from '@tanstack/react-router'
import styled from 'styled-components'
import { Banner, StyledH1, Text } from '../components/Styled'

export const Route = createLazyFileRoute('/about')({
  component: RouteComponent,
})

const BioSplash = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 90vh;
  p,
  ul {
    max-width: 50%;
    font-size: 1.3em;
    font-weight: bold;
    margin-bottom: 30px;
    list-style: none;
  }
  li {
    margin: 0;
    padding: 0;
    margin-top: 8px;
  }
`

const NavBanner = styled(Banner)`
  margin: 0;
  border-radius: 0;
`

function RouteComponent() {
  return (
    <>
      <NavBanner>👷 This page is under construction, but don't worry, the information is accurate!</NavBanner>
      <BioSplash>
        <StyledH1>Hi, I'm Lucas</StyledH1>
        <Text>I'm a Brazilian designer and developer working and living out of Worcerster, Massachusetts! (That's "woostah"). I have a background in game design and fine art (photography) that bleeds into everything I do.</Text>
        <ul>
          <li>🛠️ - I love to 3D print and paint miniatures.</li>
          <li>🧗 - You can find me and my wife rock climbing on the weeknights.</li>
          <li>🎲 - Our weekends are filled with friends playing D&D together.</li>
          <li>👾 - If I'm not reading scifi or fantasy, I'm writing about it.</li>
          <li>🧑‍🔧️ - In the summers you can find me working on my car or fixing things around the house.</li>
        </ul>
      </BioSplash>
    </>

  )
}