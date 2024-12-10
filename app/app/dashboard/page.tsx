import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { TbArrowDownLeft, TbArrowUpRight } from 'react-icons/tb'

export default function Dashboard() {
  return (
    <div className="container pb-4">
      <h1 className="mt-8 text-3xl font-bold md:mt-0">Dashboard</h1>
      <div className="mt-8 flex items-start gap-4">
        <div className="flex flex-[2] gap-4">
          <Card className="flex-1 shadow-none">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-normal">Get back</CardTitle>
              <TbArrowDownLeft />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,231.89</div>
            </CardContent>
          </Card>
          <Card className="flex-1 shadow-none">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-normal">Owed</CardTitle>
              <TbArrowUpRight />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,231.89</div>
            </CardContent>
          </Card>
        </div>
        <div className="max-h-[80vh] flex-1">
          <Card className="shadow-none">
            <CardHeader>
              <CardTitle>Activity</CardTitle>
            </CardHeader>
            <CardContent></CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
