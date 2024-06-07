import { FC, ReactNode } from 'react'

import Footer from '@/components/common/Layout/Footer/Footer'

import AuthDrawer from '@/components/common/Layout/Header/AuthDrawer/AuthDrawer'
import MobileMenu from '@/components/common/Layout/Header/MobileMenu'
import { Link } from '@tanstack/react-router'
import Container from './Container'
import Header from './Header/Header'
import Logo from '/logo-white.png'

type LayoutProps = {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <main className="flex min-h-screen flex-col">
      <header className="border-b bg-gray-900 text-white">
        <Container className="flex h-[70px] items-center justify-between">
          <div className="md:hidden">
            <MobileMenu />
          </div>
          <Link to="/">
            <img src={Logo} className="h-10" />
          </Link>

          <Header />

          <AuthDrawer />
        </Container>
      </header>

      <section className="flex-grow">{children}</section>

      <Footer />
    </main>
  )
}

export default Layout
