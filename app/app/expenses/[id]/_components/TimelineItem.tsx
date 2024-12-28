import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import dayjs from 'dayjs'

type TimelineItemProps = {
  avatarImageUrl?: string
  createdBy: string
  date: string
  events: string
}

export default function TimelineItem({ avatarImageUrl, createdBy, date, events }: TimelineItemProps) {
  return (
    <li className="group flex gap-8">
      <div className="relative w-0.5 translate-y-3 bg-border group-last:bg-transparent">
        <div className="absolute left-1/2 top-0 flex h-2 w-2 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-foreground" />
      </div>
      <div className="flex-1 pb-10">
        <div className="flex items-center gap-2">
          <Avatar className="h-5 w-5 border">
            <AvatarImage src={avatarImageUrl} />
            <AvatarFallback className="text-xs">PS</AvatarFallback>
          </Avatar>
          <h1>
            {createdBy} - {dayjs(date, 'DD/MM/YYYY').format('DD MMM YYYY, hh:mm A')}
          </h1>
        </div>
        <p className="mt-2">{events}</p>
      </div>
    </li>
  )
}
