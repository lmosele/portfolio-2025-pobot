import React, { useState } from 'react'
import styled from 'styled-components'
import { createLazyFileRoute } from '@tanstack/react-router'

import '../App.css'



const StyledH1 = styled.h1`
  font-size: 5em;
`
const StyledH2 = styled.h2`
  font-size: 2em;
`

const TileRow = styled.div`
  display: flex;
  flex-direction: row;
`

const Tile = styled.figure`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--core-background-color);
  width: 300px;
  padding: 20px;
  height: auto;
  color: var(--core-text-color-inverse);
`

const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const IconHBDev = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="none">
        <path
            fill="url(#a)"
            fill-rule="evenodd"
            d="M20.8 25a12.5 12.5 0 1 1 16.7 11.8v.7a16.7 16.7 0 0 0 16.7 16.7h.7a12.5 12.5 0 1 1 0 8.3h-.7a25 25 0 0 1-16.7-6.4v7.1a12.5 12.5 0 1 1-8.3 0V36.8A12.5 12.5 0 0 1 20.8 25Z"
            clip-rule="evenodd"
        />
        <circle cx="33" cy="25" r="13" fill="#FF5C35" />
        <circle cx="67" cy="59" r="13" fill="url(#b)" />
        <path fill="url(#c)" d="M29 37h8v33h-8z" />
        <circle cx="34" cy="75" r="13" fill="url(#d)" />
        <defs>
            <linearGradient
                id="a"
                x1="19.5"
                x2="56"
                y1="25.5"
                y2="24.3"
                gradientUnits="userSpaceOnUse"
            >
                <stop stop-color="#FF5C35" />
                <stop offset=".8" stop-color="#FF824E" />
            </linearGradient>
            <linearGradient
                id="b"
                x1="54"
                x2="80"
                y1="59"
                y2="59"
                gradientUnits="userSpaceOnUse"
            >
                <stop offset=".3" stop-color="#FF824E" />
                <stop offset=".7" stop-color="#FFA766" />
            </linearGradient>
            <linearGradient
                id="c"
                x1="33.4"
                x2="33.4"
                y1="38.4"
                y2="72.1"
                gradientUnits="userSpaceOnUse"
            >
                <stop stop-color="#FF5C35" />
                <stop offset=".5" stop-color="#FF824E" />
            </linearGradient>
            <linearGradient
                id="d"
                x1="21"
                x2="47"
                y1="75"
                y2="75"
                gradientUnits="userSpaceOnUse"
            >
                <stop offset=".3" stop-color="#FF824E" />
                <stop offset=".7" stop-color="#FFA766" />
            </linearGradient>
        </defs>
    </svg>
)
const IconHBDes = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="74" height="74" fill="none">
        <path
            fill="url(#a)"
            d="M59.6 37a6.2 6.2 0 1 1 0-12.3 6.2 6.2 0 0 1 0 12.3ZM47.3 20.6a6.2 6.2 0 1 1 0-12.4 6.2 6.2 0 0 1 0 12.4Zm-20.6 0a6.2 6.2 0 1 1 0-12.4 6.2 6.2 0 0 1 0 12.4ZM14.4 37a6.2 6.2 0 1 1 0-12.3 6.2 6.2 0 0 1 0 12.3ZM37 0a37 37 0 0 0 0 74 6.2 6.2 0 0 0 4.6-10.3 6.2 6.2 0 0 1 4.6-10.3h7.2A20.6 20.6 0 0 0 74 33C74 14.7 57.4 0 37 0Z"
        />
        <path fill="#fff" d="M22 31a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
        <circle cx="27" cy="15" r="7" fill="#fff" />
        <circle cx="47" cy="15" r="7" fill="#fff" />
        <circle cx="60" cy="31" r="7" fill="#fff" />
        <defs>
            <linearGradient
                id="a"
                x1="0"
                x2="74"
                y1="37"
                y2="37"
                gradientUnits="userSpaceOnUse"
            >
                <stop offset=".3" stop-color="#FF824E" />
                <stop offset=".7" stop-color="#FFA766" />
            </linearGradient>
        </defs>
    </svg>
)

const sections = ['Intro', 'Bio', 'Projects', 'Ask Me Anything']

const Homepage = () => {
    const [currentSection, setCurrentSection] = useState(0)
    const [scrollPos, setScrollPos] = useState(0)

    const scrollToSection = (index) => {
        setCurrentSection(index)
        document.getElementById(`section-${index}`).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    }

    // useEffect(() => {
    //     const handleScroll = (e) => {
    //         const currentScrollY = e.deltaY;
    //         console.log({ currentScrollY, scrollPos })

    //         // if (Math.abs(currentScrollY - scrollPos) < 50) return;
    //         if (currentScrollY > scrollPos) {
    //             // Downward scroll
    //             console.log('down')

    //             if (currentSection < sections.length - 1) {
    //                 scrollToSection(currentSection + 1);
    //             }
    //         } else if (currentScrollY < scrollPos) {
    //             // Upward scroll
    //             console.log('up')

    //             if (currentSection > 0) {
    //                 scrollToSection(currentSection - 1);
    //             }
    //         }

    //         setScrollPos(currentScrollY);
    //     };

    //     window.addEventListener('wheel', handleScroll, { once: true });
    //     return () => window.removeEventListener('wheel', handleScroll);
    // }, [scrollPos, currentSection]);

    return (
        <div className="home">
            {/* Sections */}
            <div className="sections">
                <CenterContainer key={0} id={`section-0`} className="section">
                    <StyledH1>Hi Hubspot!</StyledH1>
                    <button onClick={() => scrollToSection(1)}>Let's Go!</button>
                </CenterContainer>
            </div>
            <div className="sections">
                <div key={1} id={`section-1`} className="section">
                    <CenterContainer key={0} id={`section-0`} className="section">
                        <StyledH2>
                            I’m a Design Technologist with 10+ years of Design Systems of
                            design systems experience.
                        </StyledH2>

                        <TileRow>
                            <Tile>
                                <IconHBDes />
                                Designer
                            </Tile>
                            <Tile>
                                <IconHBDev />
                                Developer
                            </Tile>
                        </TileRow>
                    </CenterContainer>
                </div>
            </div>
            <div className="sections">
                <div key={2} id={`section-2`} className="section">
                    <StyledH1>section 3!</StyledH1>
                </div>
            </div>
            <div className="sections">
                <div key={3} id={`section-3`} className="section">
                    <StyledH1>PoBot</StyledH1>
                </div>
            </div>
        </div>
    )
}

export const Route = createLazyFileRoute('/')({
    component: Homepage,
})