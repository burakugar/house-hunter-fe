import PaymentPage from '@/pages/payment/Payment'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/payment')({
  component: PaymentPage
})
