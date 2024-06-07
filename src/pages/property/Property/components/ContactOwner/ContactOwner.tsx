import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader
} from '@/components/ui/card'
import { useAuthDrawerContext } from '@/providers/AuthDrawerProvider/AuthDrawerProvider'
import { useAuthContext } from '@/providers/AuthProvider/AuthProvider'
import { OwnerType } from '@/services/property-service/types'
import { Link } from '@tanstack/react-router'
import { FC } from 'react'

type ContactOwnerProps = {
  owner: OwnerType
}

const ContactOwner: FC<ContactOwnerProps> = ({ owner }) => {
  const { user } = useAuthContext()
  const { handleOpenDrawer } = useAuthDrawerContext()

  const isLoggedIn = !!user?.email
  const isVerified = user?.status === 'VERIFIED'

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">Contact the owner</h2>

      <Card>
        <CardHeader>
          <CardDescription>
            Get in touch with the owner for more information about this
            property.
          </CardDescription>
        </CardHeader>

        {isLoggedIn ? (
          isVerified ? (
            <CardContent className="space-y-2">
              <div>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Name
                </div>
                <div>{`${owner?.name} ${owner?.surname}`}</div>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Email
                </div>
                <a href={`mailto:${owner?.email}`}>{owner?.email}</a>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Phone
                </div>
                <a href={`tel:${owner?.phoneNumber}`}>{owner?.phoneNumber}</a>
              </div>
            </CardContent>
          ) : (
            <CardContent className="text-sm">
              <div
                className="rounded-md border-l-4 border-orange-500 bg-orange-100 p-4 text-orange-700"
                role="alert"
              >
                <p>Verify your identity to see owner contact details</p>
                <Link
                  to="/settings/account"
                  className="text-blue-500 underline underline-offset-2"
                >
                  Verify
                </Link>
              </div>
            </CardContent>
          )
        ) : (
          <CardContent>
            <div
              className="rounded-md border-l-4 border-orange-500 bg-orange-100 p-4 text-orange-700"
              role="alert"
            >
              <p>Please log in to see the owner's contact details.</p>
            </div>

            <Button onClick={handleOpenDrawer} size="sm" className="mt-3">
              Log in
            </Button>
          </CardContent>
        )}
      </Card>
    </div>
  )
}

export default ContactOwner
