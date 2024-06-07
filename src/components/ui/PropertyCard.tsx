import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { InfoCircledIcon } from '@radix-ui/react-icons'
import { Link, ReactNode } from '@tanstack/react-router'
import {
  BedIcon,
  Calendar,
  Home,
  Layers,
  LayoutPanelLeft,
  LocateIcon,
  RulerIcon
} from 'lucide-react'
import { FC } from 'react'

type PropertyCardProps = {
  title: string
  id?: string
  description: string
  availableFrom: string
  isFurnished: string
  squareMeters: number
  price: string
  floorNumber: number
  numberOfRooms: string
  adType: string
  address: string
  apartmentType: string
  cardHeader: ReactNode
}

const PropertyCard: FC<PropertyCardProps> = ({
  title,
  description,
  id,
  availableFrom,
  isFurnished,
  squareMeters,
  price,
  floorNumber,
  numberOfRooms,
  address,
  apartmentType,
  cardHeader
}) => {
  return (
    <Card className="h-full w-full">
      {cardHeader}
      <CardContent className="space-y-4 p-4 pb-4 pt-0 sm:p-6">
        <div>
          <h3 className=" whitespace-pre-wrap text-xl font-bold">{title}</h3>

          <p className="mt-1 whitespace-pre-wrap text-base text-muted-foreground">
            {description}
          </p>
        </div>

        <div className="grid gap-4 text-sm sm:grid-cols-2">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-muted-foreground" />
              <div>{availableFrom}</div>
            </div>
            <p className="pl-7 text-xs  text-muted-foreground">
              Available from
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Home className="h-5 w-5 text-muted-foreground" />
            <div>{isFurnished}</div>
          </div>

          <div className="flex items-center gap-2">
            <RulerIcon className="h-5 w-5 text-muted-foreground" />
            <div>{squareMeters} sq m</div>
          </div>

          <div className="flex items-center gap-2">
            <div className="text-[16px] text-muted-foreground">Kč</div>
            <div>{price}</div>
          </div>

          <div className="flex items-center gap-2">
            <Layers className="h-5 w-5 text-muted-foreground" />
            <div>{floorNumber} floor</div>
          </div>

          <div className="flex items-center gap-2">
            <BedIcon className="h-5 w-5 text-muted-foreground" />
            <div>{`${numberOfRooms}`}</div>
          </div>

          <div className="flex items-center gap-2">
            <LayoutPanelLeft className="h-5 w-5 text-muted-foreground" />
            <div>{apartmentType}</div>
          </div>

          <div className="flex items-center gap-2">
            <LocateIcon className="h-5 w-5 text-muted-foreground" />
            <div className="max-w-[140px] break-words">{address} address</div>
          </div>
        </div>

        {id && (
          <Link
            className={cn(
              buttonVariants({
                variant: 'outline'
              })
            )}
            to="/properties/$id"
            params={{
              id
            }}
          >
            <InfoCircledIcon />
            See details
          </Link>
        )}
      </CardContent>
    </Card>
  )
}

export default PropertyCard
