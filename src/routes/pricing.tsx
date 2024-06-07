import { Pricing } from '@/pages'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pricing')({
  component: Pricing
})
