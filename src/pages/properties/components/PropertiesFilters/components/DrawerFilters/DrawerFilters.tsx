import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerTrigger
} from '@/components/ui/drawer'
import PropertiesFilters from '@/pages/properties/components/PropertiesFilters/PropertiesFilters'
import { FilterIcon } from 'lucide-react'
import { FC } from 'react'

type DrawerFiltersProps = {
  drawerOpen: boolean
  setDrawerOpen: (value: boolean) => void
  applyFilters: () => void
}

const DrawerFilters: FC<DrawerFiltersProps> = ({
  drawerOpen,
  setDrawerOpen,
  applyFilters
}) => {
  const handleCloseDrawer = () => setDrawerOpen(false)

  return (
    <div className="overflow-auto">
      <Drawer open={drawerOpen} onOpenChange={setDrawerOpen} direction="left">
        <DrawerTrigger asChild>
          <Button variant="outline" size="noSize" className="h-8 px-3">
            <p className="text-md">Filters</p>
            <FilterIcon className="h-4 w-4" />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="overflow-auto lg:hidden">
          <DrawerFooter>
            <PropertiesFilters
              applyFilters={applyFilters}
              handleCloseDrawer={handleCloseDrawer}
            />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}

export default DrawerFilters
