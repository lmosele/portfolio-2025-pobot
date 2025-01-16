import { createLazyFileRoute } from '@tanstack/react-router'
import Chat from '../components/Chat'

export const Route = createLazyFileRoute('/about')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div><Chat /></div>
}
