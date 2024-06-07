import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useNavigate, useSearch } from '@tanstack/react-router'
import { FC, useEffect, useRef } from 'react'

type RoomsRangeFilterProps = {}

const RoomsRangeFilter: FC<RoomsRangeFilterProps> = () => {
  const minRef = useRef<HTMLInputElement>(null)
  const maxRef = useRef<HTMLInputElement>(null)

  const { minRooms, maxRooms } = useSearch({
    from: '/properties'
  })

  const navigate = useNavigate({
    from: '/properties'
  })

  function handleMinChange(value: string) {
    const minRoomsInput = parseInt(value)

    if (
      isNaN(minRoomsInput) ||
      minRoomsInput < 1 ||
      minRoomsInput > 50 ||
      minRoomsInput > maxRooms
    ) {
      minRef.current.value = '1'
      return navigate({
        resetScroll: false,
        search: (prev) => ({
          ...prev,
          minRooms: 1
        })
      })
    }

    navigate({
      resetScroll: false,
      search: (prev) => ({
        ...prev,
        minRooms: minRoomsInput
      })
    })
  }

  function handleMaxChange(value: string) {
    const maxRoomsInput = parseInt(value)

    if (
      isNaN(maxRoomsInput) ||
      maxRoomsInput < 1 ||
      maxRoomsInput > 50 ||
      maxRoomsInput < minRooms
    ) {
      maxRef.current.value = '5'
      return navigate({
        search: (prev) => ({
          ...prev,
          maxRooms: 5
        })
      })
    }

    navigate({
      resetScroll: false,
      search: (prev) => ({
        ...prev,
        maxRooms: maxRoomsInput
      })
    })
  }

  useEffect(() => {
    minRef.current.value = minRooms.toString()
    maxRef.current.value = maxRooms.toString()
  }, [minRooms, maxRooms])

  return (
    <div>
      <Label>Rooms range</Label>

      <div className="flex gap-2">
        <div>
          <p className="mb-1 text-xs text-muted-foreground">Min.</p>
          <Input
            type="number"
            onBlur={(e) => handleMinChange(e.target.value)}
            placeholder="Min rooms"
            ref={minRef}
            className="h-8 py-0"
          />
        </div>
        <div>
          <p className="mb-1 text-xs text-muted-foreground">Max.</p>
          <Input
            type="number"
            onBlur={(e) => handleMaxChange(e.target.value)}
            placeholder="Max rooms"
            ref={maxRef}
            className="h-8 py-0"
          />
        </div>
      </div>
      <p className="mt-1 text-xs text-muted-foreground">
        Choose a range of between 1 and 50.
      </p>
    </div>
  )
}

export default RoomsRangeFilter
