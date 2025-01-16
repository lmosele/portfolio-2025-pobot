import { createLazyFileRoute } from '@tanstack/react-router'
import styled from 'styled-components'

export const Route = createLazyFileRoute('/about')({
  component: RouteComponent,
})

const BioSplash = styled.div`
  display: flex;
  background-color: var(--hubspot-primary-color);
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`

function RouteComponent() {
  return (
    <BioSplash>
      <h1>Hi, I'm Lucas</h1>
    </BioSplash>

  )
}
