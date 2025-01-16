import { createLazyFileRoute } from '@tanstack/react-router'
import { Blurb, InnerContainer, SplashButton, SplashHeader, StyledH1, StyledH2, StyledH3, Text, Token, Breadcrumb } from '../components/Styled'
import { ChevronLeft } from 'react-feather'
import { Link } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/sprout')({
  component: RouteComponent,
})


function RouteComponent() {
  return (
    <div>
      <SplashHeader>
        <InnerContainer>
          <Breadcrumb as={Link} to='/portfolio'><ChevronLeft size='16px' />Back to Portfolio</Breadcrumb>
          <StyledH1>Sprout Social: Parity & Metrics</StyledH1>
        </InnerContainer>
      </SplashHeader>
      <InnerContainer>
        <Blurb>
          <StyledH2>Aka: How a fledgling Design Systems organization learns to build.</StyledH2>
          <Token style={{ background: 'var(--sprout-accent-color)' }}>Project Date: 2021 - 2023</Token>
          <StyledH3>Role: Senior Design Engineer</StyledH3>
        </Blurb>
        <img src="/sprout-slide-1.png" alt="Sprout" />
        <img src="/sprout-slide-2.png" alt="Sprout" />

        <Blurb>
          <StyledH2>Goal: Pass a VPAT audit while simultaneously refactoring our codebase and aligning our Figma designs.</StyledH2>
          <Text>We had our work cut out for us, with a number of simultaenous projects that overlapped considerably in both stakeholders and output.</Text>
        </Blurb>

        <img src="/sprout-slide-3.png" alt="Sprout" />

        <Blurb>
          <StyledH2>It became quickly clear that we were biting off more than we could chew, and that the project could be streamlined.</StyledH2>
        </Blurb>

        <img src="/sprout-slide-4.png" alt="Sprout" />

        <Blurb>
          <StyledH2>We spent months understanding our users needs.</StyledH2>
          <Text>The research on team language use, Figma parity issues, and accessibility were done by myself and two product designers. During this process, we refined our needs by meeting with numerous engineers, designers, and product managers.</Text>
        </Blurb>
        <img src="/sprout-slide-5.png" alt="Sprout" />
        <Blurb>
          <StyledH2>Once we learned where our trust and communication gaps were, we moved to technical gaps.</StyledH2>
          <Text>Using Node and React, I built a dashboard that scanned our application for our component's abstractions and gave us a visual of our usage metrics. It was also the first time we were able to track adoption over time, allowing us to see a delta of utilization for every component in our library.</Text>
          <StyledH2>During this research, a major trend came up: Our Menu components were difficult to use and largely indistinguishable from each other in utility and experience.</StyledH2>
        </Blurb>
        <img src="/sprout-slide-6.png" alt="Sprout" />
        <Blurb>
          <StyledH2>By the end of the second year, we had not only kept the lights on, but created a new consolidated roadmap thanks to our research and newfound metrics.</StyledH2>
          <Text>My metrics tool meant we could now prioritize major issues against level of effort and utilization, something we never did before.</Text>
        </Blurb>
        <img src="/sprout-slide-7.png" alt="Sprout" />

        <Blurb>
          <StyledH2>The outcome of this project were numerous:</StyledH2>
          <Text>Not only did we understand the gaps in our design system, we also educated team members on design systems methodologies, created new ways to get support from our team, and created a consistent shared language and process for our designs.</Text>
        </Blurb>



      </InnerContainer>
      <SplashHeader>
        <SplashButton as={Link} to='/menu'>See How We Built The Menu</SplashButton>
        <SplashButton as='a' href='https://seeds.sproutsocial.com/components/'>Visit The Seeds Design System</SplashButton>
      </SplashHeader>
    </div>
  )
}
