import { FC } from 'react'

type HeaderWelcomeProps = {}

const HeaderWelcome: FC<HeaderWelcomeProps> = () => {
  return (
    <div className="flex flex-col items-start justify-between gap-4 bg-slate-100 py-6 md:flex-row md:items-center md:gap-8">
      <div className="container grid gap-2 md:px-[100px]">
        <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
          Find Your Perfect Home
        </h1>
        <p className="max-w-md text-gray-500 dark:text-gray-400">
          Browse our selection of flats and apartments for rent or sale.
        </p>
      </div>
    </div>
  )
}

export default HeaderWelcome
