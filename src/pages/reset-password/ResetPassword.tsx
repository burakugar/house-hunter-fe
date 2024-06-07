import { Container, Layout } from '@/components/common'
import { Card } from '@/components/ui/card'
import { Typography } from '@/components/ui/typography'
import ResetPasswordForm from '@/pages/reset-password/components/ResetPasswordForm/ResetPasswordForm'
import { FC } from 'react'

type ResetPasswordProps = {}

const ResetPassword: FC<ResetPasswordProps> = () => {
  return (
    <Layout>
      <Container>
        <div className="mx-auto mt-12 h-[600px] max-w-[400px] md:mt-24">
          <Card className="p-6 py-8">
            <Typography variant="h3">Reset your password</Typography>
            <ResetPasswordForm />
          </Card>
        </div>
      </Container>
    </Layout>
  )
}

export default ResetPassword
