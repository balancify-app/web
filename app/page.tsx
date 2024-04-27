import Link from 'next/link'
import { UserButton } from '@clerk/nextjs'
import { auth } from '@clerk/nextjs/server'

import { Button } from '@/components/ui/button'

export default function Home() {
  const { userId } = auth()

  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <div className="flex items-center">
        <h1 className="border-r-[1px] border-gray-400 p-2  px-4">Under Construction</h1>
        <h1 className="p-2 px-4">Landing page</h1>
      </div>

      {userId ? (
        <UserButton afterSignOutUrl="/" />
      ) : (
        <div className="flex gap-2">
          <Button asChild className="mt-6">
            <Link href="/sign-in">Sign In</Link>
          </Button>
          <Button asChild className="mt-6" variant="secondary">
            <Link href="/sign-up">Sign Up</Link>
          </Button>
        </div>
      )}
    </main>
  )
}
