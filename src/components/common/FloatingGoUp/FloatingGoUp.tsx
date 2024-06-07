import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import throttle from 'lodash.throttle'
import { ChevronUp } from 'lucide-react'
import { FC, useCallback, useEffect, useRef, useState } from 'react'

type FloatingGoUpProps = {}

const FloatingGoUp: FC<FloatingGoUpProps> = () => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLButtonElement>(null)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleScroll = useCallback(
    throttle(() => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight / 1.5 &&
        document.body.offsetHeight > 2000
      ) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }, 300),
    []
  )

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <Button
      ref={ref}
      variant="outline"
      size="icon"
      onClick={scrollToTop}
      className={cn(
        'fixed bottom-8 right-8 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-primary p-2 text-white shadow-lg transition-all duration-300 hover:-translate-y-1',
        {
          'pointer-events-none opacity-0': !isVisible,
          'opacity-100': isVisible
        }
      )}
    >
      <div className="flex items-center justify-center">
        <ChevronUp className="h-6 w-6" />
      </div>
    </Button>
  )
}

export default FloatingGoUp
