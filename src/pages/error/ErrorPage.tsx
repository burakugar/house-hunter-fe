import { Link } from '@tanstack/react-router'
import { FC } from 'react'

type ErrorPageProps = {}

const ErrorPage: FC<ErrorPageProps> = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="mb-4 text-4xl font-bold">Oops! Something went wrong.</h1>
      <p className="text-lg">We apologize for the inconvenience.</p>

      <Link to="/" className="mt-4 text-blue-800 underline">
        Go to home page
      </Link>
    </div>
  )
}

export default ErrorPage
