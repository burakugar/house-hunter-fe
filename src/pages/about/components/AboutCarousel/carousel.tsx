import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { FC } from 'react'

import Img1 from '/images/about-us/1.jpeg'
import Img2 from '/images/about-us/2.jpeg'
import Img3 from '/images/about-us/3.jpeg'
import Img4 from '/images/about-us/4.jpeg'

const carouselData = [
  {
    image: Img1,
    title: 'Find Your Dream Home',
    description: 'Discover the perfect property for you and your family.'
  },
  {
    image: Img2,
    title: ' Luxury Living',
    description: 'Experience the epitome of luxury in our high-end properties.'
  },
  {
    image: Img3,
    title: 'Modern Amenities',
    description:
      'Enjoy state-of-the-art amenities in our contemporary properties.'
  },
  {
    image: Img4,
    title: 'Serene Locations',
    description: 'Discover tranquil properties in the most desirable locations.'
  }
]

export const AboutCarousel: FC = () => {
  return (
    <div className="flex flex-col gap-8 md:flex-row">
      <Carousel
        className="max-w-[500px]"
        opts={{
          loop: true
        }}
        plugins={[
          Autoplay({
            delay: 4000,
            stopOnInteraction: true
          })
        ]}
      >
        <CarouselContent>
          {carouselData.map(({ image, title, description }) => (
            <CarouselItem className="relative" key={title}>
              <div className="relative">
                <img
                  alt="Real Estate 1"
                  className="h-[500px] w-full rounded-xl object-cover"
                  src={image}
                ></img>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-gray-900/50 to-transparent" />
              </div>
              <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12">
                <h2 className="text-3xl font-bold text-white md:text-4xl">
                  {title}
                </h2>
                <p className="mt-2 max-w-md text-gray-200 md:text-lg">
                  {description}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 transform rounded-full bg-white/80 p-2 transition duration-300 hover:bg-white" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 transform rounded-full bg-white/80 p-2 transition duration-300 hover:bg-white" />
      </Carousel>
      <div className="flex flex-col items-start justify-center space-y-6">
        <h1 className="text-3xl font-black md:text-5xl">
          Your Trusted Real Estate Partner
        </h1>

        <p className="">
          House Hunter has been helping families find their dream homes. Our
          experienced team is dedicated to providing exceptional service and
          finding the perfect property for your needs.
        </p>
      </div>
    </div>
  )
}

export default AboutCarousel
