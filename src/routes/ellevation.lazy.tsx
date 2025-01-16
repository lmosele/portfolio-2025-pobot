import { createLazyFileRoute } from '@tanstack/react-router'
import { Blurb, InnerContainer, SplashHeader, StyledH1, StyledH2, StyledH3, Text, Token, Breadcrumb, InverseButton } from '../components/Styled'
import { ChevronLeft, GitHub } from 'react-feather'
import { Link } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/ellevation')({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <div>
            <SplashHeader style={{ height: '400px', background: 'var(--ellevation-accent-color)' }}>
                <InnerContainer>
                    <Breadcrumb as={Link} to='/portfolio'><ChevronLeft size='16px' />Back to Portfolio</Breadcrumb>
                    <StyledH1>Ellevation Education: Strategies Prototyping</StyledH1>
                </InnerContainer>
            </SplashHeader>
            <InnerContainer style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Blurb>
                    <Token style={{ background: 'var(--ellevation-accent-color)' }}>Project Date: 2018 - 2018</Token>
                    <StyledH3>Role: UX Developer</StyledH3>

                    <StyledH2>Overview</StyledH2>
                    <Text>
                        Ellevation Education is a software company that builds tools for ESL (English as a Second Language) students and their teachers. As part of the strategies team, I was asked to come onboard to help build their design systems culture and brainstorm ways of prototyping new tools.
                    </Text>
                </Blurb>

                <img width={'60%'} src="/ell-1.png" alt="Ellevation" />

                <Blurb>
                    <StyledH2>Goals</StyledH2>
                    <Text>
                        Develop and design a sample prototype using off-the-shelf tooling and technologies for other teams to emulate.
                    </Text>
                    <StyledH2>Goals</StyledH2>
                    <Text>
                        Product Managers were able to more quickly validate ideas during testing and Designers were more empowered to engage with the Development process. React was also seeing its first light as a potential replacement for our old stack.
                    </Text>
                </Blurb>

                <img width={'60%'} src="/ell-2.png" alt="Ellevation" />

                <Blurb>
                    <StyledH2>Exploration:</StyledH2>
                    <Text>
                        As the sole UX developer, my first role was to establish norms and guidelines around the team’s front-end development. While I operated within and around several teams, my ultimate goal was to establish a Web Guild and normalize the design side of things. Our first opportunity was during redesign of our Strategies product.
                    </Text>
                    <Text>
                        Strategies were modular lesson plans for teachers that required a variety of layouts depending on the lesson’s content design.
                    </Text>
                    <StyledH2>Development:</StyledH2>
                    <Text>
                        I approached our lack of prototyping with the understanding that our current technologies (Sketch for design, and C++ for web) were limiting our capacity to test with external users due to our product manager's needs to build quick public facing apps that required no authentication.
                    </Text>
                    <Text>
                        With that in mind, I built out infrastructure to build and render React prototypes, and equipped the product managers with simple “databases” within Sheets that allowed them to quickly toggle features and content during tests. The React sites were then deployed to Netlify and shared to external users.
                    </Text>
                    <InverseButton as='a' href='https://github.com/lmosele/elle-react' target='_blank'><GitHub />See Prototype on Github</InverseButton>

                </Blurb>

                <img width={'60%'} src="/ell-3.png" alt="Ellevation" />

                <Blurb>
                    <StyledH2>Results</StyledH2>
                    <Text>
                        The out of this project was that Product Managers were able to more quickly validate ideas during testing. Designers were also more empowered to engage with the Development process. React was also seeing its first light as a potential replacement for our old stack.
                    </Text>
                    <Text>
                        As a result of this prototype I was assigned to help design and build a production scale version of an A/B testing tool, allowing us to internally flag new features for user research.
                    </Text>
                    <StyledH2>Takeaways</StyledH2>
                    <ul>
                        <li>Teams are only as effective as their capacity to test and validate.</li>
                        <li>When equipped with rapid prototyping, teams improve output and feedback cycles shorten.</li>
                        <li>Communications with engineers and designers improve when prototyping is built into culture (via web guild, or within teams)</li>
                        <li>Changes in design culture have long term impact on visual development and platform experience.</li>
                    </ul>
                </Blurb>

                <img width={'60%'} src="/ell-4.png" alt="Ellevation" />
                <Blurb>
                    <Text>
                        A modernized Strategies platform utilizing modern web practices (Design Systems and React)
                    </Text>
                </Blurb>


            </InnerContainer>

        </div>
    )
}