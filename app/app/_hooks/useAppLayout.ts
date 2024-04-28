'use client'

import { ROUTES } from '@/lib/constants'
import { useUser } from '@clerk/nextjs'
import { useMemo, useState } from 'react'
import { LayoutDashboard, LucideIcon, PieChart, User, Users } from 'lucide-react'

type AppLinkType = {
  title: string
  link: string
  icon: LucideIcon
}

export default function useAppLayout() {
  const { user, isLoaded } = useUser()
  const [isCollapsed, setIsCollapsed] = useState(false)

  const appLinks: AppLinkType[] = useMemo(
    () => [
      {
        title: 'Dashboard',
        link: ROUTES.APP.DASHBOARD,
        icon: LayoutDashboard,
      },
      {
        title: 'Expenses',
        link: ROUTES.APP.EXPENSES,
        icon: PieChart,
      },
      {
        title: 'Groups',
        link: ROUTES.APP.GROUPS,
        icon: Users,
      },
      {
        title: 'Friends',
        link: ROUTES.APP.FRIENDS,
        icon: User,
      },
    ],
    [],
  )

  console.log(appLinks)

  return {
    isCollapsed,
    setIsCollapsed,
    user,
    isLoaded,
    appLinks,
  }
}
