import { Container, Layout } from '@/components/common'
import { Typography } from '@/components/ui/typography'
import NewPropertyForm from '@/pages/owner/add-new-property/components/NewPropertyForm/NewPropertyForm'
import { Link } from '@tanstack/react-router'
import { ChevronLeft } from 'lucide-react'
import { FC } from 'react'

type AddNewPropertyProps = {}

const AddNewProperty: FC<AddNewPropertyProps> = () => {
  return (
    <Layout>
      <Container className="mt-4 max-w-[1200px]">
        <div className="flex items-center gap-2">
          <Link to="/manage-properties">
            <ChevronLeft />
          </Link>
          <Typography variant="h4">Add new property request</Typography>
        </div>

        <NewPropertyForm />
      </Container>
    </Layout>
  )
}

export default AddNewProperty
