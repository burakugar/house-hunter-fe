import { AddNewProperty } from '@/pages'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth-owner/manage-properties/add-new')({
  component: AddNewProperty
})
