import { Container, Layout } from '@/components/common'
import GetInTouchForm from '@/components/common/GetInTouch/GetInTouchForm'
import AboutCarousel from '@/pages/about/components/AboutCarousel/carousel'
import OurTeam from '@/pages/about/components/OurTeam/OurTeam'
import OurValues from '@/pages/about/components/OurValues/OurValues'
import { FC } from 'react'

const About: FC = () => {
  return (
    <>
      <Layout>
        <Container className="mt-4">
          <AboutCarousel />
          <OurValues />
          <OurTeam />
          <section className="relative mt-8 w-full rounded-md py-12 md:py-24">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-gray-800 via-gray-900 to-black opacity-80"></div>
            <div className="relative z-10 mx-auto max-w-[500px]">
              <h2 className="text-center text-2xl font-bold text-white">
                Get in touch with us
              </h2>
              <p className="mt-4 text-center text-gray-300">
                We are always ready to help you.
              </p>
              <GetInTouchForm />
            </div>
          </section>
        </Container>
      </Layout>
    </>
  )
}

export default About
