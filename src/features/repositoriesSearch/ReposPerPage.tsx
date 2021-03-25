import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store/rootReducer'
import { setSearchParams } from './repositoriesSearchSlice'
import AmountPerPage from 'components/amountperpage/AmountPerPage'

const ReposPerPage = () => {
  const dispatch = useDispatch()
  const perPage = useSelector(
    (state: RootState) => state.repositories.searchParams.perPage
  )

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const perPage = event.target.value
    dispatch(setSearchParams({ perPage }))
  }
  return <AmountPerPage onChange={onChange} perPage={perPage} />
}

export default ReposPerPage
