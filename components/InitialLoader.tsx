import { LuLoader2 } from 'react-icons/lu'

export default function InitialLoader() {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <LuLoader2 className="h-8 w-8 animate-spin" />
    </div>
  )
}
