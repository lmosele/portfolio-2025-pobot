import React, { useEffect, useState } from 'react'
import { createLazyFileRoute } from '@tanstack/react-router'
import { useSnapshot } from 'valtio'
import { state } from '../state'

import { IconHBDes, IconHBDev } from '../assets/react-icons'
import { CenterContainer, StyledH1, StyledH2, Tile, TileRow, StyledButton } from '../components/Styled'

import '../App.css'


const Homepage = () => {
    const snap = useSnapshot(state, { sync: true })

    const [currentSection, setCurrentSection] = useState(snap.currentSection)
    const [scrollPos, setScrollPos] = useState(0)

    const scrollToSection = (index) => {
        setCurrentSection(index)
        state.currentSection = index;
        document.getElementById(`section-${index}`).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    }

    useEffect(() => {
        scrollToSection(state.currentSection)
    }, [state.currentSection])

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
                    <StyledButton onClick={() => scrollToSection(1)}>Let's Go!</StyledButton>
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