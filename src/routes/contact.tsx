import { ContactUs } from '@/pages'
import { createFileRoute } from '@tanstack/react-router'
import { z } from 'zod'

const ContactUsSearch = z.object({
  propertyId: z.string().optional()
})

export const Route = createFileRoute('/contact')({
  validateSearch: (search) => ContactUsSearch.parse(search),
  component: ContactUs
})
