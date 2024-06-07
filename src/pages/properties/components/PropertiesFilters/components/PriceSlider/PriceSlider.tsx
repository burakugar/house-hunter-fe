import { Label } from '@/components/ui/label'
import { Slider } from '@/components/ui/slider'
import {
  MAX_PRICE,
  MIN_PRICE
} from '@/pages/properties/components/PropertiesFilters/PropertiesFilters'
import { czkCurrencyFormatter } from '@/utils/czkCurrencyFormatter'
import { useNavigate, useSearch } from '@tanstack/react-router'
import { ArrowBigUp } from 'lucide-react'
import { FC, useEffect, useRef } from 'react'

const STEP = 1000

type RangeType = [number, number]

const PriceSlider: FC = () => {
  const priceOneRef = useRef<HTMLParagraphElement>(null)
  const priceTwoRef = useRef<HTMLParagraphElement>(null)

  const { minPrice, maxPrice, adType } = useSearch({
    from: '/properties'
  })

  const isSale = adType === 'SALE'
  const maxPriceValue = isSale ? MAX_PRICE : 100_000

  const navigate = useNavigate({
    from: '/properties'
  })

  function handleCommitChange(range: RangeType) {
    navigate({
      resetScroll: false,
      search: (prev) => ({
        ...prev,
        minPrice: range[0],
        maxPrice: range[1]
      })
    })
  }

  useEffect(() => {
    if (priceOneRef.current && priceTwoRef.current) {
      priceOneRef.current.textContent = czkCurrencyFormatter.format(minPrice)
      priceTwoRef.current.textContent = czkCurrencyFormatter.format(maxPrice)
    }
  }, [maxPrice, minPrice])

  function onChange(range: RangeType) {
    if (priceOneRef.current && priceTwoRef.current) {
      priceOneRef.current.textContent = czkCurrencyFormatter.format(range[0])
      priceTwoRef.current.textContent = czkCurrencyFormatter.format(range[1])
    }
  }

  return (
    <div className="mb-1 mt-2" data-vaul-no-drag>
      <Label>Price range</Label>

      <div className="mt-2 flex items-center gap-4 text-sm">
        <p ref={priceOneRef}></p>—<p ref={priceTwoRef}></p>
      </div>

      <div className="mt-2">
        <Slider
          minStepsBetweenThumbs={1}
          step={isSale ? 10_000 : STEP}
          min={MIN_PRICE}
          max={maxPriceValue}
          defaultValue={[minPrice, maxPrice]}
          onValueChange={onChange}
          onValueCommit={handleCommitChange}
        />

        {isSale && (
          <p className="mt-2 hidden text-sm text-muted-foreground md:block">
            <span className="inline-block">
              Use arrow keys or hold
              <ArrowBigUp className="ml-1 inline-block h-4 w-4" />
            </span>
            <kbd className="mx-1 inline-block rounded bg-muted px-1 py-0.5 text-xs uppercase">
              Shift
            </kbd>
            + arrow for precise prices
          </p>
        )}
      </div>
    </div>
  )
}

export default PriceSlider
