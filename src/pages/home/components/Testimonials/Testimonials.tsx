import { FC } from 'react'

import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import { Typography } from '@/components/ui/typography'
import { testimonials } from '@/pages/home/components/Testimonials/testimonialsData'

type TestimonialsProps = {}

const Testimonials: FC<TestimonialsProps> = () => {
  return (
    <section className="w-full border-t py-12">
      <div className="px-4 text-center">
        <div className="space-y-3">
          <Typography variant="h1">What Our Customers Say</Typography>
          <p className="text-center text-muted-foreground">
            Hear from real people who have used our platform to take control of
            their finances.
          </p>
        </div>

        <Carousel
          className="mt-8"
          opts={{
            align: 'start',
            loop: true
          }}
        >
          <CarouselContent>
            {testimonials.map(({ name, id, role, image, comment }) => (
              <CarouselItem className="md:basis-1/2 lg:basis-1/3" key={id}>
                <Card className="h-[360px] md:h-[360px] lg:h-[360px]">
                  <CardHeader>
                    <div className="flex gap-2">
                      <Avatar>
                        <AvatarImage src={image} className="object-cover" />
                      </Avatar>

                      <div className="flex flex-col text-left">
                        <div className="font-semibold">{name}</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          {role}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <blockquote className="text font-semibold italic leading-snug sm:text-lg">
                      "{comment}"
                    </blockquote>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="-bottom-10 right-[36px]" />
          <CarouselNext className="-bottom-10 right-0" />
        </Carousel>
      </div>
    </section>
  )
}

export default Testimonials
