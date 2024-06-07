import { Container, Layout } from '@/components/common'
import Search from '@/pages/home/components/Search/Search'
import Stats from '@/pages/home/components/Stats/Stats'
import Testimonials from '@/pages/home/components/Testimonials/Testimonials'
import { statsService } from '@/services/stats-service/stats-service'
import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'

type HomeProps = {}

const Home: FC<HomeProps> = () => {
  const statsQuery = useQuery({
    queryKey: ['stats'],
    queryFn: statsService.getStats
  })

  return (
    <>
      <Layout>
        <div className="mt-6 flex flex-col sm:mt-14">
          <section className="relative min-h-[600px] w-full py-12 shadow-sm">
            <div className="absolute inset-0 -left-[200px] -right-[200px] -top-[200px] -z-10 rounded-md bg-[url('/images/hero.jpg')] bg-cover bg-[bottom_center] bg-no-repeat opacity-30 blur-[2px]"></div>

            <div className="p-6 text-center">
              <div className="mx-auto max-w-[600px]">
                <h1 className="text-2xl font-extrabold text-primary md:text-3xl lg:text-5xl">
                  Your trusted real estate partner
                </h1>
                <p className="mt-4 text-sm font-semibold text-slate-800 sm:text-base">
                  Discover a seamless and rewarding experience in buying,
                  selling, or renting your next home. With our expert guidance
                  and comprehensive resources, we turn your real estate dreams
                  into reality. Trust us to navigate the market with you,
                  providing personalized support every step of the way.
                </p>

                <Search statsQuery={statsQuery} />
              </div>
            </div>
          </section>

          <Container>
            <Stats statsQuery={statsQuery} />

            <Testimonials />
          </Container>
        </div>
      </Layout>
    </>
  )
}

export default Home
