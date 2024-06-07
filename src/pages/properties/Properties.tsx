import { Container, Layout } from '@/components/common'
import ErrorResult from '@/components/common/Errors/ErrorResult'
import NoContent from '@/components/common/Errors/NoContent'

import {
  DrawerFilters,
  HeaderWelcome,
  PropertiesSort,
  PropertiesFilters,
  PropertiesList,
  PropertiesSkeletonList
} from '@/pages/properties/components'
import PropertiesPagination from '@/pages/properties/components/PropertiesPagination/PropertiesPagination'
import { propertyService } from '@/services/property-service/property-service'
import { useBreakpoint } from '@/utils/hooks/useBreakpoint'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { useNavigate, useSearch } from '@tanstack/react-router'
import { FC, useEffect, useState } from 'react'

const PropertiesPage: FC = () => {
  const { isLg } = useBreakpoint('lg')
  const [drawerOpen, setDrawerOpen] = useState(false)

  const navigate = useNavigate({
    from: '/properties'
  })

  const queryParams = useSearch({
    from: '/properties'
  })

  const { data, isFetching, isLoading, isError, refetch } = useQuery({
    // eslint-disable-next-line @tanstack/query/exhaustive-deps
    queryKey: ['properties', queryParams.page, queryParams.sort],
    queryFn: () => propertyService.getAll(queryParams),
    placeholderData: keepPreviousData,
    retry: false
  })

  function applyFilters() {
    navigate({
      resetScroll: false,
      search: (prev) => {
        return {
          ...prev,
          page: 1
        }
      }
    })

    refetch()
  }

  const isEmpty = data?.content?.length === 0

  useEffect(() => {
    if (isLg) {
      setDrawerOpen(false)
    }
  }, [isLg])

  return (
    <Layout>
      <HeaderWelcome />

      <Container className="mt-6 max-w-[1200px]">
        <div className="mb-2 ml-auto hidden min-w-[250px] max-w-fit lg:block">
          <PropertiesSort />
        </div>

        <section className="flex max-w-[1200px] flex-col items-start gap-4 overflow-auto lg:flex-row">
          <aside className="w-full lg:min-w-[350px] lg:max-w-[350px]">
            <div className="hidden rounded-lg border bg-white p-6 lg:block">
              <PropertiesFilters
                applyFilters={applyFilters}
                isFetching={isFetching}
              />
            </div>

            <div className="flex items-end justify-between gap-2 lg:hidden">
              <DrawerFilters
                drawerOpen={drawerOpen}
                setDrawerOpen={setDrawerOpen}
                applyFilters={applyFilters}
              />

              <div className="lg:hidden">
                <PropertiesSort />
              </div>
            </div>
          </aside>

          <div className="w-full flex-grow">
            {isError ? (
              <ErrorResult className="my-[100px]" onRetry={refetch} />
            ) : isLoading ? (
              <div className="flex flex-col gap-4">
                <PropertiesSkeletonList />
              </div>
            ) : !isEmpty ? (
              <div className="flex flex-col gap-4">
                <PropertiesList properties={data.content} />
              </div>
            ) : (
              <NoContent className="md:mt-[100px]" />
            )}

            {!isError && !isEmpty && !isLoading && (
              <PropertiesPagination
                data={data}
                isFetching={isFetching}
                isError={isError}
              />
            )}
          </div>
        </section>
      </Container>
    </Layout>
  )
}

export default PropertiesPage
