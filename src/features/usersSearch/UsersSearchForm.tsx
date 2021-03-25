import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  resetSearchParams,
  setSearchParams
} from 'features/usersSearch/usersSearchSlice'
import SearchForm from './SearchForm'

import Filters from 'components/filters/Filters'
import { RootState } from 'store/rootReducer'
import styles from './users.module.css'

const UsersSearchForm: React.FC = () => {
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

  // TODO: fix this warning
  useEffect(() => {
    dispatch(resetSearchParams())
  }, [])

  return (
    <div>
      <div className={styles.userSeachForm}>
        <SearchForm />
      </div>
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
    </div>
  )
}

export default UsersSearchForm
