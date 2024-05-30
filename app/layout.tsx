import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'

import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'

import { basisGrotesqueArabic } from '@/lib/font'

import './globals.css'
import { cn } from '@/lib/utils'

dayjs.extend(advancedFormat)

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
        <body className={cn('min-h-dvh font-sans antialiased', basisGrotesqueArabic.variable)}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
