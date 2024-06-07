import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { AccountStatusType } from '@/services/user-service/types'
import { Label } from '@radix-ui/react-label'
import { FC } from 'react'

type AccountStatusProps = {
  accountStatus: AccountStatusType
}

const AccountStatus: FC<AccountStatusProps> = ({ accountStatus }) => {
  const messages = {
    ACTIVE: 'Verified',
    NOT_ACTIVATED: 'Not activated',
    BLOCKED: 'Blocked'
  }

  return (
    <div className="mt-4 flex flex-col items-start gap-2">
      <Label htmlFor="verification">Account Status</Label>
      <Badge
        className={cn('border-none text-xs', {
          'bg-green-500 text-white': accountStatus === 'ACTIVE',
          'bg-yellow-400 text-white': accountStatus === 'NOT_ACTIVATED',
          'bg-red-500 text-white': accountStatus === 'BLOCKED'
        })}
        variant="outline"
      >
        {messages[accountStatus]}
      </Badge>
    </div>
  )
}

export default AccountStatus
