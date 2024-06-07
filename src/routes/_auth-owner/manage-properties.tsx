import { ManageProperties } from '@/pages'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth-owner/manage-properties')({
  component: ManageProperties
})
