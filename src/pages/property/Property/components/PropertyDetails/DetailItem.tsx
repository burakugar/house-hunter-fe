import { FC } from 'react'

type DetailItemProps = {
  title: string
  description: string | number
}

const DetailItem: FC<DetailItemProps> = ({ title, description }) => {
  return (
    <div>
      <p className="text-sm font-medium text-muted-foreground">{title}</p>
      <p className="text-sm">{description}</p>
    </div>
  )
}

export default DetailItem
