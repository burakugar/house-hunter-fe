import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Link } from '@tanstack/react-router'
import { ThumbsDown } from 'lucide-react'
import { FC } from 'react'

type FileComplaintProps = {
  propertyId: string
}

const FileComplaint: FC<FileComplaintProps> = ({ propertyId }) => {
  return (
    <Link
      to="/contact"
      search={{
        propertyId
      }}
      className={cn(
        buttonVariants({
          variant: 'destructive',
          size: 'sm'
        })
      )}
    >
      <ThumbsDown className="h-4 w-4" />
      File a complaint
    </Link>
  )
}

export default FileComplaint
