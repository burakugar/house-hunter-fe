import { ValidRoutes } from '@/app'
import { UserRole } from '@/providers/AuthProvider/AuthProvider'

type LinkType = {
  to: ValidRoutes
  access: 'ALL' | UserRole
  label: string
}

export const navLinks: LinkType[] = [
  {
    to: '/',
    label: 'Home',
    access: 'ALL'
  },
  {
    to: '/properties',
    label: 'Listings',
    access: 'ALL'
  },
  {
    to: '/about',
    label: 'About us',
    access: 'ALL'
  },
  {
    to: '/pricing',
    label: 'Pricing',
    access: 'ALL'
  },
  {
    to: '/contact',
    label: 'Contact us',
    access: 'ALL'
  },
  {
    to: '/manage-properties',
    label: 'My properties',
    access: 'LANDLORD'
  },
  {
    to: '/admin-dashboard',
    label: 'Manage users',
    access: 'ADMIN'
  }
]
