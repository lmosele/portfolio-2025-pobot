import { createLazyFileRoute } from '@tanstack/react-router'
import { Blurb, InnerContainer, SplashButton, SplashHeader, StyledH1, StyledH2, StyledH3, Text, Token, Breadcrumb } from '../components/Styled'
import { ChevronLeft } from 'react-feather'
import { Link } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/menu')({
    component: RouteComponent,
})


function RouteComponent() {
    return (
        <div>
            <SplashHeader>
                <InnerContainer>
                    <Breadcrumb as={Link} to='/portfolio'><ChevronLeft size='16px' />Back to Portfolio</Breadcrumb>
                    <StyledH1>Sprout Social: Menu Ecosystem</StyledH1>
                </InnerContainer>
            </SplashHeader>
            <InnerContainer>
                <Blurb>
                    <StyledH2>A complete rethinking of our design system's largest set of components.</StyledH2>
                    <Token style={{ background: 'var(--sprout-accent-color)' }}>Project Date: 2023 - 2024</Token>
                    <StyledH3>Role: Senior Design Engineer</StyledH3>
                    <StyledH2>Thanks to our <Link to='/sprout'>previous research</Link>, our team of 6 was able to pinpoint one of the largest technical and design problems in our system.</StyledH2>
                    <Text>Dubbed an "ecosystem" due to its overwhelming number of individual parts, variants, and APIs, we first focused on understanding what a new Menu needed to become in order to solve the problems we had identified.</Text>
                </Blurb>
                <img src="/menu-slide-1.png" alt="Sprout" />
                <Blurb>
                    <StyledH2>As part of my research, I worked with the team to define a finalized shared language based on the workshops I had run.</StyledH2>
                    <Text>The goal was to develop a language that allowed us to discuss the Menu ecosystem in pieces. Loosely based on Atomic Design principles, we came up with a simplified model that allowed us to categorize development and design into three chunks:</Text>
                </Blurb>
                <img src="/menu-slide-2.png" alt="Sprout" />

                <Blurb>
                    <StyledH2>Before development could begin, myself and our three developers worked through the difficult process of outlining all possible jobs within the ecosystem. </StyledH2>
                    <Text>This part of designing alone took well over a month. We developed feature files for all of the individual pieces of the Menu, and shared our experience with the wider team as it had positive impacts on our design quality.</Text>
                </Blurb>

                <img src="/menu-slide-3.png" alt="Sprout" />

                <Blurb>
                    <StyledH2>Once the Menu's numerous parts and interactions were defined, myself and the other design engineer worked closely with our staff product designer to prototype and design the interactions.</StyledH2>
                    <Text>The entirety of this phase of our project was led by accessibility needs, resulting in numerous discussions r VPAT auditors.</Text>
                    <Text>This was also the first phase of the project where coding was done by myself and the team.</Text>
                </Blurb>

                <img src="/menu-slide-4.png" alt="Sprout" />

                <Blurb>
                    <StyledH2>Accessibility was at the forefront, always.</StyledH2>
                </Blurb>
                <img src="/menu-slide-5.png" alt="Sprout" />
                <Blurb>
                    <StyledH2>One interesting side effect of this project was the conversations around style.</StyledH2>
                    <Text>Before this project, we had never discussed the necessity of coding guidelines, but due to the overlapping nature of this ecosystem, I developed and introduced coding guidelines to our team to better align on patterns.</Text>
                </Blurb>
                <img src="/menu-slide-6.png" alt="Sprout" />

                <img src="/menu-slide-7.png" alt="Sprout" />

                <Blurb>
                    <StyledH2>While the Menu ecosystem was the focus of this project, it was not the only thing we did.</StyledH2>
                    <Text>The process improvements allowed us to work in parallel and follow the exact same process for our Switch, Loaders, and Icon components</Text>
                </Blurb>
                <img src="/menu-slide-8.png" alt="Sprout" />
                <img src="/menu-slide-9.png" alt="Sprout" />
                <img src="/menu-slide-10.png" alt="Sprout" />

                <Blurb>
                    <StyledH2>While the new menu isn't publically available, you can see many of the new components in the <a href='https://seeds.sproutsocial.com/components/'>Seeds</a> reference site..</StyledH2>
                </Blurb>


            </InnerContainer>
            <SplashHeader>
                <SplashButton as={Link} to='/sprout'>See How We Researched This Project</SplashButton>
                <SplashButton as='a' href='https://seeds.sproutsocial.com/components/'>Visit The Seeds Design System</SplashButton>
            </SplashHeader>
        </div>
    )
}
