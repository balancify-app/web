import Link from 'next/link'
import { auth } from '@clerk/nextjs/server'

import { Button } from '@/components/ui/button'
import { ROUTES } from '@/lib/constants'

export default function Home() {
  const { userId } = auth()

  return (
    <main className="container flex h-screen flex-col items-center justify-center">
      <div className="flex items-center">
        <h1 className="border-r-[1px] border-gray-400 p-2  px-4">Under Construction</h1>
        <h1 className="p-2 px-4">Landing page</h1>
      </div>

      <div className="mt-6 flex gap-2">
        {userId ? (
          <Button asChild>
            <Link href={ROUTES.APP.HOME}>App</Link>
          </Button>
        ) : (
          <>
            <Button asChild>
              <Link href={ROUTES.LANDING.SIGN_IN}>Sign In</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href={ROUTES.LANDING.SIGN_UP}>Sign Up</Link>
            </Button>
          </>
        )}
        <Button asChild>
          <Link href={ROUTES.LANDING.BLOGS}>Dev Blogs</Link>
        </Button>
      </div>
    </main>
  )
}
