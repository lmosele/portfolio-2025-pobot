import styled from 'styled-components'

export const StyledH1 = styled.h1`
  font-size: 5em;
`
export const StyledH2 = styled.h2`
  font-size: 2em;
`

export const TileRow = styled.div`
  display: flex;
  flex-direction: row;
`

export const Tile = styled.figure`
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

export const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const StyledButton = styled.button`
    background: transparent;
    border: 1px solid var(--core-text-color);
    color: var(--core-text-color);
    padding: 20px;
    border-radius: 5px;
    font-weight: 500;
    &:hover {
        cursor: pointer;
        background: var(--core-background-color);
        color: var(--core-text-color-inverse);
    }
`