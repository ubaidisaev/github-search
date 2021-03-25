import { Pagination } from 'components/pagination/Pagination'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store/rootReducer'
import { ReactPaginateProps } from 'react-paginate'
import { fetchUsersList, setSearchParams } from './usersSearchSlice'

const UsersPagination = () => {
  const dispatch = useDispatch()
  const { page } = useSelector((state: RootState) => state.users.searchParams)
  const { totalPages, isLoading } = useSelector(
    (state: RootState) => state.users
  )

  const currentPage = Math.min(totalPages, Math.max(page, 1)) - 1

  const onPageChange: ReactPaginateProps['onPageChange'] = ({ selected }) => {
    dispatch(setSearchParams({ page: selected + 1 }))
    dispatch(fetchUsersList())
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

export default UsersPagination
