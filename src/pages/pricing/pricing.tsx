import { Container, Layout } from '@/components/common'
import { buttonVariants } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'
import { Typography } from '@/components/ui/typography'
import { cn } from '@/lib/utils'
import { Link } from '@tanstack/react-router'
import { CheckIcon } from 'lucide-react'

export default function Pricing() {
  return (
    <>
      <Layout>
        <Container>
          <section className="mt-4">
            <div className="px-4 md:px-6">
              <div className="space-y-4 text-center">
                <Typography variant="h1">Pricing</Typography>
                <p className="mx-auto text-muted-foreground">
                  Choose the plan that fits your needs. Monthly or lifetime,
                  we've got you covered.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-10">
                <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
                  <div className="flex h-full flex-col justify-between">
                    <div>
                      <div>
                        <h3 className="text-2xl font-bold">Tenant</h3>
                        <p className="text-4xl font-bold">300 Kč</p>
                        <p className="text-gray-500 dark:text-gray-400">
                          /month
                        </p>
                      </div>
                      <Table>
                        <TableBody>
                          <TableRow>
                            <TableCell>
                              Unlimited Contacts: Connect with an unlimited
                              number of potential landlords.
                            </TableCell>
                            <TableCell>
                              <CheckIcon className="h-5 w-5" />
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>
                              Get your property with a secure way with our
                              verified landlords.
                            </TableCell>
                            <TableCell>
                              <CheckIcon className="h-5 w-5" />
                            </TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>
                              Priority Customer Support: Get your questions
                              answered and issues resolved faster with our
                              priority support service.
                            </TableCell>
                            <TableCell>
                              <CheckIcon className="h-5 w-5 " />
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </div>

                    <Link to="/payment" className={cn(buttonVariants())}>
                      Get Started
                    </Link>
                  </div>
                </div>

                <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold">Landlord</h3>
                      <p className="text-4xl font-bold">500 Kč</p>
                      <p className="text-gray-500 dark:text-gray-400">/month</p>
                    </div>
                    <Table>
                      <TableBody>
                        <TableRow>
                          <TableCell>
                            Unlimited Listings: Enjoy the freedom to post
                            unlimited property listings for life.
                          </TableCell>
                          <TableCell>
                            <CheckIcon className="h-5 w-5 " />
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            Unlimited Contacts: Network with as many buyers or
                            renters as you want, forever.
                          </TableCell>
                          <TableCell>
                            <CheckIcon className="h-5 w-5 " />
                          </TableCell>
                        </TableRow>

                        <TableRow>
                          <TableCell>
                            Advanced Analytics: Access powerful analytics tools
                            to help you track and optimize your listings'
                            performance.
                          </TableCell>
                          <TableCell>
                            <CheckIcon className="h-5 w-5 " />
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell>
                            Priority Customer Support: Receive top-notch
                            priority support whenever you need it, ensuring a
                            smooth experience.
                          </TableCell>
                          <TableCell>
                            <CheckIcon className="h-5 w-5 " />
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>

                    <Link
                      to="/payment"
                      className={cn(buttonVariants(), 'w-full')}
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Container>
      </Layout>
    </>
  )
}
