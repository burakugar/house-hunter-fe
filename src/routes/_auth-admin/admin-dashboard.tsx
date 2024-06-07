import { AdminPage } from '@/pages'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth-admin/admin-dashboard')({
  component: AdminPage
})
