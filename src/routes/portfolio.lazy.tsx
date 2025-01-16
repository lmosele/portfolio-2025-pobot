import { createLazyFileRoute, Link } from '@tanstack/react-router'
import { InnerContainer, StyledH3, Text, Tile, TileColumn, Token } from '../components/Styled'
import styled from 'styled-components'

export const Route = createLazyFileRoute('/portfolio')({
    component: RouteComponent,
})

const TopAccent = styled.div`
    display: block;
    position: absolute;
    width: 100%;
    height: 10px;
    top: 0;
    border-radius: var(--core-border-radius) var(--core-border-radius) 0 0;
    left: 0;
    background: var(--hubspot-accent-color); // fallback?
`
const ImageAccent = styled.img`
    display: flex;
    flex: 1;
    max-height: 150px;
    box-shadow: 10px 10px 25px -25px rgba(0,0,0,0.75);  

`
const Row = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
`
const Col = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`


function RouteComponent() {
    return (
        <section>
            <InnerContainer>
                <TileColumn>
                    <Tile as={Link} to="/menu">
                        <TopAccent style={{ background: 'var(--sprout-accent-color)' }} />
                        <Row>
                            <ImageAccent src="/sprout-menu-1.png" alt="Sprout" />
                            <Col>
                                <StyledH3>Sprout Social: Menu Ecosystem</StyledH3>
                                <Token style={{ background: 'var(--sprout-accent-color)' }}>React | Design | Research</Token>
                                <Text>A large scale refactoring and rethinking of our organization's filtering, searching, dropdown and menu interactions.</Text>
                            </Col>
                        </Row>
                    </Tile>
                    <Tile as={Link} to="/sprout">
                        <TopAccent style={{ background: 'var(--sprout-accent-color-dark)' }} />
                        <Row>
                            <ImageAccent src="/sprout-metrics.png" alt="Sprout" />
                            <Col>
                                <StyledH3>Sprout Social: Parity & Metrics</StyledH3>
                                <Token style={{ background: 'var(--sprout-accent-color-dark)' }}>React | DesignOps | Research</Token>
                                <Text>Overview of how we built our design system's refactoring process and metrics tooling for tracking design systems utilization.</Text>
                            </Col>
                        </Row>
                    </Tile>
                    <Tile as={Link} to="/appcues">
                        <TopAccent style={{ background: 'var(--appcues-accent-color)' }} />
                        <Row>
                            <ImageAccent src="/appcues-1.png" alt="Appcues" />
                            <Col>
                                <StyledH3>Appcues: Table Analytics</StyledH3>
                                <Token style={{ background: 'var(--appcues-accent-color)' }}>React | Design</Token>
                                <Text>A large scale refactoring and rethinking of our organization's filtering, searching, dropdown and menu interactions.</Text>
                            </Col>
                        </Row>
                    </Tile>
                </TileColumn>
            </InnerContainer>
        </section >)

}
