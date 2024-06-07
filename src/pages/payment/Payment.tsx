import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Link } from '@tanstack/react-router'

export default function PaymentPage() {
  return (
    <>
      <div className="fixed inset-0 -z-50 bg-gray-100"></div>
      <div className="mt-12 flex  flex-col">
        <main className="grid flex-1 grid-cols-1 gap-8 p-8 dark:bg-gray-800 md:grid-cols-2 md:p-12">
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold">Monthly Subscription</h1>
              <p className="text-gray-500 dark:text-gray-400">
                Get access to all our features for one low monthly price.
              </p>
            </div>
            <div className="space-y-4 rounded-lg bg-white p-6 shadow-md dark:bg-gray-950">
              <div className="flex items-center justify-between">
                <span className="text-gray-500 dark:text-gray-400">Plan</span>
                <span className="font-semibold">Pro</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500 dark:text-gray-400">Price</span>
                <span className="text-2xl font-semibold">300 Kč</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500 dark:text-gray-400">Billed</span>
                <span className="font-semibold">Monthly</span>
              </div>
            </div>
          </div>
          <Card className="space-y-4 rounded-lg bg-white p-6 shadow-md">
            <CardHeader>
              <CardTitle>Payment Details</CardTitle>
              <CardDescription>
                Enter your payment information to start your subscription.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name on Card</Label>
                <Input id="name" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="card-number">Card Number</Label>
                <Input id="card-number" placeholder="4111 1111 1111 1111" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiry">Expiry</Label>
                  <Input id="expiry" placeholder="MM/YY" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvc">CVC</Label>
                  <Input id="cvc" placeholder="123" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zip">ZIP Code</Label>
                  <Input id="zip" placeholder="12345" />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Start Subscription</Button>
            </CardFooter>
          </Card>
        </main>
        <footer className="fixed left-0 right-0 top-0 flex items-center justify-center gap-2 bg-gray-900 px-6 py-4 text-center text-white">
          <p className="text-sm">
            This page is currently under development. Check back soon for
            updates.
          </p>

          <Link to=".." className="text-sm underline">
            Go back
          </Link>
        </footer>
      </div>
    </>
  )
}
