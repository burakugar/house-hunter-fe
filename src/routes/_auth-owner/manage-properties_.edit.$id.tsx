import EditProperty from '@/pages/owner/edit-property/EditProperty'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth-owner/manage-properties/edit/$id')(
  {
    component: EditProperty
  }
)
