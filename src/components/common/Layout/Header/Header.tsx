import { navLinks } from '@/components/common/Layout/Header/navLinks'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList
} from '@/components/ui/navigation-menu'
import { useAuthContext } from '@/providers/AuthProvider/AuthProvider'
import { Link } from '@tanstack/react-router'
import { FC } from 'react'

const Header: FC = () => {
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
    <NavigationMenu className="hidden md:block xl:-ml-[100px]">
      <NavigationMenuList className="flex items-center gap-4 xl:gap-6">
        {filteredLinks.map((link) => (
          <NavigationMenuItem key={link.to}>
            <Link
              to={link.to}
              className="text-[15px] font-light text-slate-100 transition-colors hover:text-slate-300"
              activeProps={{
                style: {
                  color: 'white',
                  fontWeight: 'normal'
                }
              }}
            >
              {link.label}
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default Header
