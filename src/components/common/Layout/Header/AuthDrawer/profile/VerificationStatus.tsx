import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip'
import { useAuthDrawerContext } from '@/providers/AuthDrawerProvider/AuthDrawerProvider'
import { useAuthContext } from '@/providers/AuthProvider/AuthProvider'
import { Link } from '@tanstack/react-router'
import { AlertTriangleIcon, Check, Hourglass } from 'lucide-react'
import { FC } from 'react'

type VerificationStatusProps = {}

const VerificationStatus: FC<VerificationStatusProps> = () => {
  const { handleCloseDrawer } = useAuthDrawerContext()
  const auth = useAuthContext()

  const isVerified = auth?.user.status === 'VERIFIED'
  const isNotVerified = auth?.user.status === 'NOT_VERIFIED'
  const isPendingVerified = auth?.user.status === 'PENDING_VERIFICATION'

  if (isVerified) {
    return (
      <div className="flex items-center gap-2">
        <div className="flex h-[16px] w-[16px] items-center justify-center rounded-full border border-green-500 text-green-500">
          <Check className="h-[11px] w-[11px]" />
        </div>
        <p className="text-sm text-green-500">Verified</p>
      </div>
    )
  } else if (isNotVerified) {
    return (
      <div>
        <div className="flex items-center gap-2 text-red-500">
          <AlertTriangleIcon className="h-[14px] w-[14px]" />

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <p className="text-sm">Not verified</p>
              </TooltipTrigger>
            </Tooltip>
          </TooltipProvider>
        </div>

        <Link
          to="/settings/account"
          className="text-xs text-blue-500 underline"
          onClick={handleCloseDrawer}
        >
          Verify account
        </Link>
      </div>
    )
  } else if (isPendingVerified) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <div className="flex items-center gap-2 text-yellow-500">
              <Hourglass className="h-[14px] w-[14px] " />
              <p className="text-sm">Pending verification</p>
            </div>
          </TooltipTrigger>
        </Tooltip>
      </TooltipProvider>
    )
  }
}

export default VerificationStatus
