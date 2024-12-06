import type { Metadata, Viewport } from 'next'
import { ClerkProvider } from '@clerk/nextjs'

import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'

import { poppins } from '@/lib/font'

import './globals.css'
import { cn } from '@/lib/utils'

import AppProviders from '@/components/AppProviders'

dayjs.extend(advancedFormat)

export const metadata: Metadata = {
  title: 'Balancify',
  description: 'Balancify is a simple way to split bills with friends.',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <AppProviders>
        <html lang="en">
          <body className={cn('min-h-dvh font-sans antialiased', poppins.variable)}>{children}</body>
        </html>
      </AppProviders>
    </ClerkProvider>
  )
}
