import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import ManageOwnerPropertiesTable from '@/pages/admin/manage-user/components/ManageOwner/ManageOwnerPropertiesTable/ManageOwnerPropertiesTable'
import ManageOwnerRequestsTable from '@/pages/admin/manage-user/components/ManageOwner/ManageOwnerRequestsTable/ManageOwnerRequestsTable'
import { Clock, HomeIcon } from 'lucide-react'
import { FC, useState } from 'react'

type ManageOwnerProps = {
  email: string
}

type OwnerTableTab = 'properties' | 'requests'

const ManageOwner: FC<ManageOwnerProps> = ({ email }) => {
  const [activeTab, setActiveTab] = useState<OwnerTableTab>('requests')

  function handleTabChange(tab: OwnerTableTab) {
    setActiveTab(tab)
  }

  return (
    <div>
      <Tabs value={activeTab} className="mt-6 w-full">
        <TabsList className="relative w-full">
          <TabsTrigger
            value="requests"
            className="flex w-full items-center gap-2 text-yellow-400 data-[state=active]:text-yellow-500"
            onClick={() => handleTabChange('requests')}
          >
            <Clock className="h-5 w-5" />
            Requests
          </TabsTrigger>
          <TabsTrigger
            value="properties"
            className="relative flex w-full items-center gap-2"
            onClick={() => handleTabChange('properties')}
          >
            <HomeIcon className="h-5 w-5" />
            Verified Properties
          </TabsTrigger>
        </TabsList>

        <TabsContent value="properties">
          <ManageOwnerPropertiesTable email={email} />
        </TabsContent>

        <TabsContent value="requests">
          <ManageOwnerRequestsTable email={email} />
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default ManageOwner
