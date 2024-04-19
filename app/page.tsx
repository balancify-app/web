import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <div className="flex items-center">
        <h1 className="border-r-[1px] border-gray-400 p-2  px-4">Under Construction</h1>
        <h1 className="p-2 px-4">Landing page</h1>
      </div>
      <Button asChild className="mt-6">
        <Link href="/app">Go to app</Link>
      </Button>
    </main>
  )
}
