import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ReactPaginateProps } from 'react-paginate'
import { RootState } from 'store/rootReducer'
import { fetchReposList, setSearchParams } from './repositoriesSearchSlice'
import { Pagination } from 'components/pagination/Pagination'

const ReposPagination: React.FC = () => {
  const dispatch = useDispatch()
  const { isLoading, totalPages } = useSelector(
    (state: RootState) => state.repositories
  )
  const page = useSelector(
    (state: RootState) => state.repositories.searchParams.page
  )
  const currentPage = Math.min(totalPages, Math.max(page, 1)) - 1

  const onPageChange: ReactPaginateProps['onPageChange'] = ({ selected }) => {
    dispatch(setSearchParams({ page: selected + 1 }))
    dispatch(fetchReposList())
  }

  if (totalPages < 1 || isLoading) return null

  return (
    <Pagination
      currentPage={currentPage}
      pageCount={totalPages}
      onPageChange={onPageChange}
    />
  )
}

export default ReposPagination
