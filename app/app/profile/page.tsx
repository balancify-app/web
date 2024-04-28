import { ROUTES } from '@/lib/constants'
import { UserProfile } from '@clerk/nextjs'

const UserProfilePage = () => (
  <div className="flex justify-center p-8">
    <UserProfile path={ROUTES.APP.PROFILE} />
  </div>
)

export default UserProfilePage
