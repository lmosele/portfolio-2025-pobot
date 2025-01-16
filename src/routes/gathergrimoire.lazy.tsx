import { createLazyFileRoute } from '@tanstack/react-router'
import { Blurb, InnerContainer, SplashHeader, StyledH1, StyledH2, StyledH3, Text, Token, Breadcrumb, InverseButton } from '../components/Styled'
import { ChevronLeft, GitHub } from 'react-feather'
import { Link } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/gathergrimoire')({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <div>
            <SplashHeader style={{ height: '400px', background: 'var(--gg-accent-color)' }}>
                <InnerContainer>
                    <Breadcrumb as={Link} to='/portfolio'><ChevronLeft size='16px' />Back to Portfolio</Breadcrumb>
                    <StyledH1>GatherGrimoire: A Tabletop Roleplaying Tool</StyledH1>
                </InnerContainer>
            </SplashHeader>
            <InnerContainer style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Blurb>
                    <Token style={{ background: 'var(--gg-accent-color)' }}>Project Date: 2024 - 2025</Token>
                    <StyledH3>Role: Creator and Developer</StyledH3>

                    <StyledH2>Overview</StyledH2>
                    <Text>
                        As a long time event planner and TTRPG game master, I was struggling to keep up with my player’s stats, inventory, and general story progression. My players also struggled to keep track of important items, quests, and clues for their games. These difficulties compounded with the larger number of groups I ran in free and paid games.
                    </Text>
                    <StyledH2>Goals</StyledH2>
                    <Text>
                        Build a tool for TTRPG game masters who want to provide their players with a mobile friendly tool for managing players as well as allowing players to maintain simple in-game entities like books, maps, items, and stats.
                    </Text>
                </Blurb>

                <img width={'60%'} src="/gg-1.png" alt="Gather Grimoire" />

                <Blurb>
                    <StyledH2>Testing via Google Sheets</StyledH2>
                    <Text>
                        Before writing code, I blocked out the rough shapes of the app within Google Sheets, simultaneously learning how to implement the features I needed and using the sheets as a prototyping tool.
                    </Text>
                    <Text>The result was an at scale tool that allowed me to quickly run games with my players and test ideas, assumptions, and data modeling.</Text>
                </Blurb>

                <img width={'60%'} src="/gg-4.png" alt="Ellevation" />
                <Blurb>
                    <Text>
                        Early drafts were primitive and colorful
                    </Text>
                </Blurb>
                <img width={'60%'} src="/gg-2.png" alt="Ellevation" />
                <Blurb>
                    <Text>
                        Later versions chose visual simplicity to avoid confusion.
                    </Text>
                </Blurb>

                <Blurb>
                    <StyledH2>Testing Results</StyledH2>
                    <Text>
                        The outcome of several months of testing resulted in the following:
                    </Text>
                    <ul>
                        <li>Players were more engaged with their characters and the world than with paper sheets</li>
                        <li>Players loved being able to see their teammates statuses</li>
                        <li>Bold colors were confusing in a game that was already overstimulating at times</li>
                        <li>Players felt a sense of ownership over their data (ie: stats, inventory, tools, etc)</li>
                    </ul>
                </Blurb>
                <Blurb>
                    <StyledH2>Development</StyledH2>
                    <Text>
                        I began development once the data model and player needs were clear. The first challenge was figuring out the player onboarding experience. I wanted players to be able to quickly import their character sheets, so I planned PDF converter function that ran via Netlify serverless functions. The resulting JSON was intended to then feed the app with the necessary starting info.
                    </Text>
                </Blurb>

                <img width={'60%'} src="/gg-5.png" alt="Gather Grimoire" />

                <Blurb>
                    <StyledH2>Managing Complexity</StyledH2>
                    <Text>
                        Testing proved that players are extremely sensitive to complexity, visual or technical - if something is even slightly more involved than just taking a note in a notebook and the value is not clear, then players will simply just not use the tool. For this reason it was important to me to avoid feature creep and focus deeply on usability and reducing friction. I decided that my red route would be easy to verbalize and memorize
                    </Text>

                </Blurb>

                <img width={'60%'} src="/gg-6.png" alt="Gather Grimoire" />

                <Blurb>
                    <StyledH2>WIP</StyledH2>
                    <Text>
                        As I designed this tool, I decided to create a more “videogame-like” set of tools for the Web view. This meant creating a set of shared auto-layout components that could work with my existing Mobile views and my Web views. Making use of libraries that could later be exported to tokens for my Styled Components theme, I began to align on a branding and visual style that wasn’t overwhelming or confusing.
                    </Text>
                    <Text>
                        One of my favorite features quickly became the map tool. Making use of Javascript rendering capabilities, I began prototyping how a map SVG or PNG could be used in a sort of quasi-Google-Earth view. The resulting view quickly became one of the most potentially useful views in GatherGrimoire. It could be used for planning between players, but could also be reconfigured as a “Book Viewer” view for players to keep track of their lore and text items.
                    </Text>
                    <Text>
                        The map tool is part of the MVP is currently in development.
                    </Text>
                </Blurb>

                <img width={'80%'} src="/gg-1.png" alt="Gather Grimoire" />


            </InnerContainer>

        </div>
    )
}