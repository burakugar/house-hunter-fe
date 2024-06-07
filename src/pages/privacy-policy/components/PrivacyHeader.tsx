import { Typography } from '@/components/ui/typography'
import { LockIcon } from 'lucide-react'
import { FC } from 'react'

type PrivacyHeaderProps = {}

const PrivacyHeader: FC<PrivacyHeaderProps> = () => {
  return (
    <div>
      <div className="flex items-center gap-2">
        <LockIcon />
        <Typography variant="h1">GDPR Compliance</Typography>
      </div>

      <p className="text-sm text-muted-foreground">
        We value your privacy and are committed to protecting your personal
        data. This privacy policy will inform you about how we look after your
        personal data when you visit our website and tell you about your privacy
        rights and how the law protects you.
      </p>
    </div>
  )
}

export default PrivacyHeader
