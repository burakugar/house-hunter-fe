import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import { FC } from 'react'

type ImagesCarouselProps = {
  images: string[]
}

const ImagesCarousel: FC<ImagesCarouselProps> = ({ images }) => {
  const isImagesEmpty = images.length === 0
  const isAtLeastTwo = images.length >= 2
  const isOneImage = images.length === 1

  return (
    <Carousel
      className="flex max-w-[900px] flex-1 justify-center rounded-md"
      opts={{
        align: 'start',
        loop: true
      }}
    >
      {!isImagesEmpty && isAtLeastTwo && (
        <>
          <CarouselContent>
            {images.map((image) => {
              return (
                <CarouselItem className="lg:basis-1/2" key={image}>
                  <img
                    alt="Property"
                    className="h-[400px] w-full rounded-md object-cover object-center"
                    src={'data:image/*;base64,' + image}
                  />
                </CarouselItem>
              )
            })}
          </CarouselContent>
          <CarouselPrevious className="-bottom-10 right-14" />
          <CarouselNext className="-bottom-10 right-5" />
        </>
      )}

      {isOneImage && (
        <img
          alt="Property"
          className="h-[400px] w-full flex-1 rounded-md object-cover object-center"
          src={'data:image/*;base64,' + images[0]}
        />
      )}
    </Carousel>
  )
}

export default ImagesCarousel
