import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { BriefcaseIcon, HeartIcon, HomeIcon } from 'lucide-react'
import { FC } from 'react'

type OurValuesProps = {}

const OurValues: FC<OurValuesProps> = () => {
  return (
    <section className="relative mt-8 grid w-full place-items-center py-12 md:py-24">
      <div className="bg-bottom[1000px_center] absolute inset-0 left-[-300px] right-[-300px] bg-[url('/bg_about_1.jpeg')] bg-cover bg-center opacity-80"></div>
      <div className="container relative z-10 grid gap-6 px-4 md:grid-cols-2 md:px-6 lg:grid-cols-3 lg:gap-8">
        <Card className="flex flex-col items-center justify-center text-center">
          <CardHeader className="flex justify-center">
            <BriefcaseIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent className="mt-4">
            <h3 className="text-xl font-bold">Expertise</h3>
            <p className="mt-2 text-gray-500 dark:text-gray-400">
              Our team of experienced real estate professionals has in-depth
              knowledge of the local market, enabling us to provide you with
              expert guidance and insights.
            </p>
          </CardContent>
        </Card>
        <Card className="flex flex-col items-center justify-center text-center">
          <CardHeader className="flex justify-center">
            <HeartIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent className="mt-4">
            <h3 className="text-xl font-bold">Values</h3>
            <p className="mt-2 text-gray-500 dark:text-gray-400">
              At House Hunter, we prioritize integrity, transparency, and
              personalized service, ensuring that your real estate journey is
              smooth and tailored to your unique needs.
            </p>
          </CardContent>
        </Card>
        <Card className="flex flex-col items-center justify-center text-center">
          <CardHeader className="flex justify-center">
            <HomeIcon className="h-8 w-8 text-gray-500 dark:text-gray-400" />
          </CardHeader>
          <CardContent className="mt-4">
            <h3 className="text-xl font-bold">Services</h3>
            <p className="mt-2 text-gray-500 dark:text-gray-400">
              From property search and evaluation to negotiation and transaction
              support, our comprehensive services cover every aspect of your
              real estate needs.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default OurValues
