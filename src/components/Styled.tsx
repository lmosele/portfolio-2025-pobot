import { Link } from '@tanstack/react-router'
import styled from 'styled-components'

export const StyledH1 = styled.h1`
  font-size: 5em;
  &.special-gradient {
    font-size: 55px;
    font-style: normal;
    font-weight: 700;
    line-height: 67px;
    background: var(--hubspot-accent-gradient);
    -webkit-text-fill-color: transparent;
  }
`
export const StyledH2 = styled.h2`
  font-size: 2em;
  color: var(--core-text-color-inverse);

`
export const StyledH3 = styled.h3`
  font-size: 1em;
  color: var(--core-text-color-inverse);
`

export const Text = styled.p`
  font-size: 1.1;
`

export const TileRow = styled.div`
  display: flex;
  flex-direction: row;
  margin: 40px 0;
  gap: 40px;
`
export const TileColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 0;
  gap: 20px;
  overflow: hidden;
`

export const Tile = styled.figure`
  display: flex;
  position: relative;
  flex: 1;
  flex-direction: column;
  gap: 1em;
  justify-content: center;
  align-items: self-start;
  background: var(--core-container-color);
  border-radius: var(--core-border-radius);
  padding: 20px;
  height: auto;
  color: var(--core-text-color-inverse);
  &a:hover {
    cursor: pointer;
    color: var(--core-text-color-inverse);
    box-shadow: 10px 10px 25px -25px rgba(0,0,0,0.75);  
  }
`

export const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const StyledButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    background: transparent;
    border: 1px solid var(--core-text-color);
    color: var(--core-text-color);
    padding: 8px 20px;
    border-radius: 5px;
    font-weight: bold;
    &:hover {
        cursor: pointer;
        background: var(--core-background-color);
        color: var(--core-text-color-inverse);
    }
`
export const AccentButton = styled.button`
    display: flex;
    justify-content: center;
    gap: 8px;
    background: var(--hubspot-accent-color);
    color: var(--core-text-color);
    padding: 8px 20px;
    border: 0;
    border-radius: var(--core-border-radius);
    font-weight: bold;
    &:hover {
        cursor: pointer;
    }
`

export const InverseButton = styled(StyledButton)`
    border: 1px solid var(--core-text-color-inverse);
    color: var(--core-text-color-inverse);
    &:hover {
        background: var(--core-text-color);
        color: var(--core-text-color-inverse);
    }
`

export const Header = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  height: 200px;
  background-color: var(--core-background-color);
  border-bottom: 1px solid var(--hubspot-secondary-color);
  color: var(--core-text-color-light);
  z-index: 2;
`
export const NavTabs = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 30px;
`
export const NavButton = styled.button`
  background-color: transparent;
  color: var(--core-text-color-inverse);
  border: 0;
  padding: 20px;
  border-bottom: 3px solid  transparent;
  &:hover {
    cursor: pointer;
  }
  &.active {
    font-weight: bold;
    border-bottom: 3px solid  var(--core-text-color-inverse);
  }
`
export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top:  auto;
  margin-left: auto;
  margin-right: auto;
  max-width: 1240px;
  width: 100%;
`
export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-bottom: 50px;
`

export const SpecialSection = styled.section`
  display: flex;
  flex: 1;
  width: 100%;
  background: var(--hubspot-accent-gradient-lite);
`

export const NavbarLinks = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  text-decoration: none;
  padding: 8px;
  gap: 8px;
  border-radius: var(--core-border-radius);
  background-color: var(--hubspot-secondary-color);
  color: var(--core-text-color-light);
    &:hover
    &:focus
    &:active {
        cursor: pointer;
        background-color: var(--hubspot-secondary-color-lite);
    }
    &.active {
        background-color: var(--hubspot-secondary-color-lite);
        color: var(--core-text-color-light);
    }
    &:visited {
        color: var(--core-text-color-light);
    }
`

export const Separator = styled.div`
    display: flex;
    background-color: var(--hubspot-secondary-color-lite);
    height: 30px;
    width: 1px;
`

export const LinksRow = styled.div`
  display: flex;  
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1em;
`

export const Token = styled.span`
    display: inline-flex;
    background: var(--core-text-color); 
    color: var(--core-background-color);
    padding: 4px 8px;
    border-radius: var(--core-border-radius);
    font-weight: bold;
    width: fit-content;
`


export const SplashHeader = styled(Header)`
  display: flex;
  height: auto;
  background-color: var(--sprout-accent-color);
  background-image: url(./sprout-bg.png);
  background-size: cover;
  background-position: center;
  height: 300px;
  color: var(--core-text-color-light);
  gap: 20px;
  h2
  img {
    max-width: 400px;
  }

`
export const SplashButton = styled(AccentButton)`
  display: flex;
  justify-self: center;
  justify-content: center;
  align-self: center;
  padding: 30px;
  font-size: 2em;
  text-align: center;
  width: 50%;
  background-color: var(--sprout-accent-color-dark);
  color: var(--core-text-color-light);
  &:hover {
    background-color: var(--sprout-accent-color);
  }
`
export const Blurb = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 0;
  margin: 20px 0;
  border-top: 1px solid var(--core-text-color);
  border-bottom: 1px solid var(--core-text-color);
`

export const Breadcrumb = styled(StyledButton)`
  max-width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`
export const Banner = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;
  margin-top: 30px;
  background: var(--hubspot-accent-color);
  border-radius: var(--core-border-radius);
  color: var(--core-text-color);
  font-weight: bold;
  font-size: 1.2em;
`
