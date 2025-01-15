import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/appcues')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/appcues"!</div>
}
