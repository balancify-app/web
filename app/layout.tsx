import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'

import './globals.css'
import { cn } from '@/lib/utils'

dayjs.extend(advancedFormat)

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Balancify',
  description: 'Balancify is a simple way to split bills with friends.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={cn('min-h-dvh font-sans antialiased', fontSans.variable)}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
