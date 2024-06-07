import { Container, Layout } from '@/components/common'
import { Typography } from '@/components/ui/typography'
import AdminTable from '@/pages/admin/admin-dashboard/components/AdminTable/AdminTable'
import { FC } from 'react'

type AdminProps = {}

const Admin: FC<AdminProps> = () => {
  return (
    <Layout>
      <Container>
        <Typography variant="h3" className="mb-2 mt-4">
          Admin dashboard
        </Typography>

        <AdminTable />
      </Container>
    </Layout>
  )
}

export default Admin
