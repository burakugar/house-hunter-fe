import { Badge } from '@/components/ui/badge'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { AccountVerificationStatus } from '@/services/user-service/types'
import { FC } from 'react'

type VerificationStatusProps = {
  status: AccountVerificationStatus
}

const VerificationStatusCol: FC<VerificationStatusProps> = ({ status }) => {
  const messages = {
    VERIFIED: 'Verified',
    NOT_VERIFIED: 'Not Verified',
    PENDING_VERIFICATION: 'Pending'
  }

  return (
    <div className="mt-4 flex flex-col items-start gap-2">
      <Label htmlFor="verification">Verification Status</Label>
      <Badge
        className={cn('border-none text-xs', {
          'bg-green-500 text-white': status === 'VERIFIED',
          'bg-yellow-400 text-white': status === 'PENDING_VERIFICATION',
          'bg-red-500 text-white': status === 'NOT_VERIFIED'
        })}
        variant="outline"
      >
        {messages[status]}
      </Badge>
    </div>
  )
}

export default VerificationStatusCol
