import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store/rootReducer'
import { setSearchParams } from './usersSearchSlice'
import Filters from 'components/filters/Filters'

const UsersFilter = () => {
  const dispatch = useDispatch()
  const [showFilter, setShowFilter] = useState(false)
  const toggleFilterShow = () => setShowFilter(show => !show)
  const { minRepos, maxRepos, language } = useSelector(
    (state: RootState) => state.users.searchParams
  )

  const handleInputChange = (event: any) => {
    dispatch(setSearchParams({ [event.target.name]: event.target.value }))
  }

  const handleLangChange = (language: string) => {
    dispatch(setSearchParams({ language }))
  }

  return (
    <Filters
      showFilter={showFilter}
      toggleFilterShow={toggleFilterShow}
      firstInputName="minRepos"
      firstInputValue={minRepos}
      firstInputLabel={'Репозиториев'}
      firstInputPlaceholder="0 min"
      secondInputName="maxRepos"
      secondInputValue={maxRepos}
      secondInputLabel={'Репозиториев'}
      secondInputPlaceholder="0 max"
      selectedLang={language}
      handleInputChange={handleInputChange}
      handleLangSelect={handleLangChange}
    />
  )
}

export default UsersFilter
