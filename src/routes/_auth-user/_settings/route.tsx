import { SettingsPage } from '@/pages'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth-user/_settings')({
  beforeLoad: () => {},
  component: () => <SettingsPage />
})
