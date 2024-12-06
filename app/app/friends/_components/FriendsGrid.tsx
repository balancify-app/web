import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Person } from '@/services/group.model'
import { HiOutlineDotsVertical } from 'react-icons/hi'

export function FriendsWrapper({
  children,
  loading,
}: Readonly<{
  children?: React.ReactNode
  loading: boolean
}>) {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {loading ? null : children}
    </div>
  )
}

export function FriendCard({ imageUrl, firstName, lastName, email, profileBgColor }: Person) {
  return (
    <Card>
      <CardContent className="flex items-center gap-2 p-4">
        <Avatar>
          <AvatarImage src={imageUrl} alt={firstName + ' ' + lastName} />
          <AvatarFallback className="text-xs uppercase" style={{ backgroundColor: profileBgColor }}>
            {firstName[0] + lastName[0]}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1 overflow-hidden">
          <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm font-bold">
            {firstName + ' ' + lastName}
          </p>
          <p className="overflow-hidden text-ellipsis whitespace-nowrap text-xs">{email}</p>
        </div>
        <Button variant="ghost" size="icon">
          <HiOutlineDotsVertical />
        </Button>
      </CardContent>
    </Card>
  )
}
