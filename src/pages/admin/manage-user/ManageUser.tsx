import { Container, Layout } from '@/components/common'
import ErrorResult from '@/components/common/Errors/ErrorResult'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Skeleton } from '@/components/ui/skeleton'
import { Typography } from '@/components/ui/typography'
import AccountStatus from '@/pages/admin/manage-user/components/AccountStatus/AccountStatus'
import BlockUser from '@/pages/admin/manage-user/components/action-buttons/BlockUser'
import DeleteUser from '@/pages/admin/manage-user/components/action-buttons/DeleteUser'
import UnverifyUser from '@/pages/admin/manage-user/components/action-buttons/Unverify'
import VerifyUser from '@/pages/admin/manage-user/components/action-buttons/VerifyUser'
import Documents from '@/pages/admin/manage-user/components/Documents/Documents'
import ManageOwner from '@/pages/admin/manage-user/components/ManageOwner/ManageOwner'
import UserSkeleton from '@/pages/admin/manage-user/components/UserSkeleton/UserSkeleton'
import VerificationStatusCol from '@/pages/admin/manage-user/components/VerificationStatus/VerificationStatus'
import { userService } from '@/services/user-service/user-service'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { getRouteApi, Link } from '@tanstack/react-router'
import { ChevronLeft } from 'lucide-react'
import { FC } from 'react'
type ManageUserProps = {}

const routeApi = getRouteApi('/_auth-admin/admin-dashboard/$id')

const ManageUser: FC<ManageUserProps> = () => {
  const { id } = routeApi.useParams()

  const {
    data: user,
    isLoading,
    isError,
    refetch
  } = useQuery({
    queryKey: ['get-admin-user-management', id],
    queryFn: () => userService.getById(id),
    placeholderData: keepPreviousData
  })

  const {
    data: documents,
    isLoading: isDocLoading,
    isError: isDocError
  } = useQuery({
    // eslint-disable-next-line @tanstack/query/exhaustive-deps
    queryKey: ['admin-user-management-documents', user?.email],
    enabled: !!user?.email,
    queryFn: () => userService.getDocuments(user.email),
    placeholderData: keepPreviousData
  })

  const avatarFallback =
    user?.name?.at(0).toUpperCase() + user?.surname?.at(0).toUpperCase()
  const isUserAdmin = user?.role === 'ADMIN'
  const isUserLandlord = user?.role === 'LANDLORD'

  if (isError || isDocError) {
    return (
      <Layout>
        <Container>
          <ErrorResult onRetry={refetch} className="mt-12" />
        </Container>
      </Layout>
    )
  }

  return (
    <Layout>
      <Container>
        <div className="mx-auto mt-4 max-w-[600px]">
          <div className="mb-6 flex items-center gap-2">
            <Link to=".." className="inline-block">
              <ChevronLeft />
            </Link>
            <Typography variant="h4" className="m-0">
              User Details
            </Typography>
          </div>

          {isLoading ? (
            <UserSkeleton />
          ) : (
            <div className="flex flex-col gap-4">
              <div className="mb-4 flex items-center gap-3">
                <Avatar>
                  <AvatarFallback>{avatarFallback}</AvatarFallback>
                </Avatar>
                <div>
                  <p>{`${user.name} ${user.surname}`}</p>
                  <p className="font-medium">{user.email}</p>
                </div>
              </div>

              {isDocLoading ? (
                <Skeleton />
              ) : (
                <Documents documents={documents} />
              )}

              <AccountStatus accountStatus={user.accountStatus} />
              <VerificationStatusCol status={user.verificationStatus} />

              <div className="mt-4 flex justify-between gap-2">
                <div className="flex flex-col gap-2">
                  <VerifyUser refetch={refetch} userEmail={user.email} />
                  <UnverifyUser refetch={refetch} userEmail={user.email} />
                </div>

                <div className="flex gap-2">
                  {!isUserAdmin && (
                    <>
                      <BlockUser
                        refetch={refetch}
                        userEmail={user.email}
                        disabled={user.accountStatus === 'BLOCKED'}
                      />

                      <DeleteUser refetch={refetch} userEmail={user.email} />
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mt-12">
          {isUserLandlord && <ManageOwner email={user.email} />}
        </div>
      </Container>
    </Layout>
  )
}

export default ManageUser
