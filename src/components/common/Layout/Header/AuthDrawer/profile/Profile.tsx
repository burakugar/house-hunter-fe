import Logout from '@/components/common/Layout/Header/AuthDrawer/components/Logout'
import VerificationStatus from '@/components/common/Layout/Header/AuthDrawer/profile/VerificationStatus'
import { navLinks } from '@/components/common/Layout/Header/navLinks'
import { buttonVariants } from '@/components/ui/button'
import { NavigationMenuItem } from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'
import { useAuthDrawerContext } from '@/providers/AuthDrawerProvider/AuthDrawerProvider'
import { useAuthContext } from '@/providers/AuthProvider/AuthProvider'
import { Link } from '@tanstack/react-router'
import { CornerUpLeft, SettingsIcon, UserIcon } from 'lucide-react'
import { FC } from 'react'

type ProfileProps = {}

const Profile: FC<ProfileProps> = () => {
  const { handleCloseDrawer } = useAuthDrawerContext()
  const auth = useAuthContext()

  const userType = auth.user?.type

  const isLandlord = userType === 'LANDLORD'
  const isAdmin = userType === 'ADMIN'

  const filteredLinks = navLinks.filter((link) => {
    switch (link.access) {
      case 'ALL':
        return true

      case 'LANDLORD':
        return isLandlord

      case 'ADMIN':
        return isAdmin

      default:
        return false
    }
  })

  return (
    <div className="mt-4 flex w-full flex-1 flex-col justify-between">
      <div className="flex flex-1 flex-col justify-between">
        <div>
          <div className="flex items-start gap-4">
            <div className="rounded-full border p-2">
              <UserIcon className="h-5 w-5" />
            </div>

            <div>
              <p>{auth?.user?.email}</p>

              <VerificationStatus />
            </div>
          </div>
          <Link
            onClick={handleCloseDrawer}
            to="/properties"
            className={cn(
              buttonVariants({
                className: 'mt-6 h-12 w-full border',
                variant: 'ghost'
              })
            )}
          >
            <CornerUpLeft />
            View properties
          </Link>

          <div className="py-3"></div>
        </div>

        <div className="flex flex-1 flex-col justify-between">
          <nav className="grid gap-2 md:hidden">
            {filteredLinks.map((link) => (
              <NavigationMenuItem key={link.to} className="list-none">
                <Link
                  to={link.to}
                  onClick={handleCloseDrawer}
                  className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-200"
                  activeProps={{
                    className: cn('bg-gray-200')
                  }}
                >
                  {link.label}
                </Link>
              </NavigationMenuItem>
            ))}
          </nav>

          <nav>
            <Link
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-200"
              to="/settings/account"
              onClick={handleCloseDrawer}
            >
              <SettingsIcon className="h-5 w-5" />
              Profile Settings
            </Link>

            <Link
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-200"
              onClick={() => setTimeout(handleCloseDrawer, 0)}
              to="/about"
            >
              <UserIcon className="h-5 w-5" />
              Team
            </Link>
          </nav>
        </div>
      </div>

      <div>
        <Logout />
      </div>
    </div>
  )
}

export default Profile
