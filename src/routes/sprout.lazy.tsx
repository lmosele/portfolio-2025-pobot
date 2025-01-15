import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/sprout')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/sprout"!</div>
}
