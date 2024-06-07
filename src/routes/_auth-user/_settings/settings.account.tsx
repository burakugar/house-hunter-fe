import { AccountSettings } from '@/pages/settings'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth-user/_settings/settings/account')({
  component: () => <AccountSettings />
})
