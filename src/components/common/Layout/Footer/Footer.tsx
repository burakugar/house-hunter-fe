import Container from '@/components/common/Layout/Container'
import ConsentPopup from '@/components/common/Layout/Header/AuthDrawer/signup/components/ConsentPopup'
import { navLinks } from '@/components/common/Layout/Header/navLinks'
import { Separator } from '@/components/ui/separator'
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon
} from '@/components/ui/social-icons'
import { cn } from '@/lib/utils'
import { useAuthContext } from '@/providers/AuthProvider/AuthProvider'
import { Link } from '@tanstack/react-router'
import { FC } from 'react'
import Logo from '/logo-white.png'
import { DialogTrigger } from '@/components/ui/dialog'

const Footer: FC = () => {
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
    <footer className="mt-12 bg-gray-900 pb-10 pt-12 text-white">
      <Container className="max-w-[1200px]">
        <div className="flex flex-col justify-between gap-12 md:flex-row">
          <Link
            className="flex shrink-0 items-center space-x-2 self-start"
            to="/"
          >
            <img src={Logo} className="h-[80px]" />
          </Link>

          <div className="grid max-w-[600px] gap-6 sm:grid-cols-2 md:grid-cols-3">
            <div className="space-y-2">
              <h4 className="text-lg font-bold">Quick Links</h4>
              <ul className="flex flex-col gap-2">
                {filteredLinks.map((link) => (
                  <Link
                    to={link.to}
                    key={link.label}
                    className="hover:underline"
                    activeProps={{
                      className: cn('underline underline-offset-2')
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="text-lg font-bold">Contacts</h4>
              <ul className="flex flex-col gap-2">
                <li>
                  <a
                    className="hover:underline"
                    href="https://maps.app.goo.gl/ueinn9UK9tJMS5C1A"
                    target="_blank"
                  >
                    123 Karlova Street, Old Town, Prague, Czech Republic
                  </a>
                </li>
                <li>
                  <a
                    className="hover:underline"
                    href="mailto:househunter773@gmail.com"
                    target="_blank"
                  >
                    househunter773@gmail.com
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="text-lg font-bold">Follow us</h4>
              <ul className="flex flex-col gap-2">
                <div className="flex space-x-4">
                  <a
                    className="transition-colors hover:text-gray-300"
                    href="https://www.facebook.com/profile.php?id=61560104906832"
                    target="_blank"
                  >
                    <FacebookIcon className="h-5 w-5" />
                  </a>
                  <a
                    className="transition-colors hover:text-gray-300"
                    href="https://x.com/House_Hunter24"
                    target="_blank"
                  >
                    <TwitterIcon className="h-5 w-5" />
                  </a>
                  <a
                    className="transition-colors hover:text-gray-300"
                    href="https://www.instagram.com/house_hunter24/"
                    target="_blank"
                  >
                    <InstagramIcon className="h-5 w-5" />
                  </a>
                </div>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-[60px] text-center text-sm text-muted-foreground">
          <div className="flex flex-col items-center justify-center gap-2 md:flex-row">
            <Link
              className="underline-offset-2 hover:underline"
              to="/privacy-policy"
            >
              Privacy policy
            </Link>
            <Separator
              orientation="vertical"
              className="hidden h-5 bg-muted-foreground md:block"
            />

            <ConsentPopup
              acceptButton={false}
              trigger={
                <DialogTrigger className="underline-offset-2 hover:underline">
                  Terms & Conditions
                </DialogTrigger>
              }
            />
          </div>

          <p className="mt-4">© 2024 House Hunt. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
