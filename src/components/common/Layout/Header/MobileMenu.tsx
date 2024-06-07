import { navLinks } from '@/components/common/Layout/Header/navLinks'
import { Button } from '@/components/ui/button'
import { NavigationMenuItem } from '@/components/ui/navigation-menu'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { useAuthDrawerContext } from '@/providers/AuthDrawerProvider/AuthDrawerProvider'
import { useAuthContext } from '@/providers/AuthProvider/AuthProvider'
import { useBreakpoint } from '@/utils/hooks/useBreakpoint'
import { Link } from '@tanstack/react-router'
import { MenuIcon } from 'lucide-react'
import { FC, useEffect, useState } from 'react'

type MobileMenuProps = {}

const MobileMenu: FC<MobileMenuProps> = () => {
  const { handleCloseDrawer } = useAuthDrawerContext()
  const { isMd } = useBreakpoint('md')
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

  const [showMenu, setShowMenu] = useState(false)

  function handleOpen() {
    setShowMenu(true)
  }

  function handleClose() {
    setShowMenu(false)
  }

  useEffect(() => {
    if (isMd) {
      handleClose()
    }
  }, [isMd])

  return (
    <Sheet open={showMenu}>
      <SheetTrigger className="md:hidden" onClick={handleOpen} asChild>
        <Button size="icon" variant="ghost">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent
        handleClose={handleClose}
        side="left"
        className="flex w-full flex-col items-center justify-center sm:max-w-[400px] md:hidden"
      >
        <nav className="grid min-w-[200px] gap-2">
          {filteredLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              onClick={handleCloseDrawer}
              className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-200"
              activeProps={{
                className: cn('bg-gray-200')
              }}
            >
              <NavigationMenuItem key={link.to} className="list-none">
                {link.label}
              </NavigationMenuItem>
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileMenu
