import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import MemberListItem from './MemberListItem'

export default function MemberList() {
  return (
    <Card className="shadow-none">
      <CardHeader>
        <CardTitle>Members</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="flex flex-col gap-4">
          <MemberListItem firstName="Adam" lastName="Brown" ownedAmount="$5.0" />
          <MemberListItem firstName="Adam" lastName="Brown" ownedAmount="$5.0" />
          <MemberListItem firstName="Adam" lastName="Brown" ownedAmount="$5.0" />
          <MemberListItem firstName="Adam" lastName="Brown" ownedAmount="$5.0" />
          <MemberListItem firstName="Adam" lastName="Brown" ownedAmount="$5.0" />
        </ul>
      </CardContent>
    </Card>
  )
}
