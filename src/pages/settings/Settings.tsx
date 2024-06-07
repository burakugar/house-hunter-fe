import { Container, Layout } from '@/components/common'
import { Typography } from '@/components/ui/typography'
import SettingsLink from '@/pages/settings/components/SettingsLink'
import { Outlet } from '@tanstack/react-router'
import { Settings2Icon } from 'lucide-react'
import { FC } from 'react'

type SettingsProps = {}

const Settings: FC<SettingsProps> = () => {
  return (
    <Layout>
      <Container className="mt-6">
        <Typography variant="h2" className="px-3">
          Settings
        </Typography>

        <div className="mt-6 flex flex-col gap-4 md:flex-row">
          <aside className="rounded-md">
            <ul className="flex flex-col gap-2">
              <SettingsLink
                to="/settings/account"
                icon={<Settings2Icon className="h-4 w-4" />}
              >
                Account
              </SettingsLink>
            </ul>
          </aside>

          <div className="min-h-[600px] flex-grow rounded-md border p-4">
            <Outlet />
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default Settings
