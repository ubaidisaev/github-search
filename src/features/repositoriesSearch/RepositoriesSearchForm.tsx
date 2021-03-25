import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Button from 'components/button/Button'
import Filters from 'components/filters/Filters'
import TextInput from 'components/textinput/TextInput'
import { setSearchParams, fetchReposList } from './repositoriesSearchSlice'

import { RootState } from 'store/rootReducer'
import styles from './repositoriesSearch.module.css'
import { resetSearchParams } from './repositoriesSearchSlice'

const RepositoriesSearchForm: React.FC = () => {
  const [showFilter, setShowFilter] = useState(false)
  const dispatch = useDispatch()
  const { language, forks, stars, reponame, repoowner } = useSelector(
    (state: RootState) => state.repositories.searchParams
  )

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchParams({ [event.target.name]: event.target.value }))
  }

  const handleLangSelect = (language: string) => {
    dispatch(setSearchParams({ language }))
  }

  const handleButtonClick = () => {
    dispatch(fetchReposList())
  }

  // TODO: fix this warning
  useEffect(() => {
    dispatch(resetSearchParams())
  }, [])

  const toggleShowFilter = () => setShowFilter(show => !show)

  return (
    <>
      <div className={styles.reposearchform}>
        <TextInput
          placeholder="Repository name"
          name="reponame"
          value={reponame}
          onChange={handleInputChange}
        />
        <TextInput
          placeholder="Repository owner"
          name="repoowner"
          value={repoowner}
          onChange={handleInputChange}
        />
        <Button onClick={handleButtonClick}>Найти репозитории</Button>
      </div>

      <br />
      <Filters
        showFilter={showFilter}
        toggleFilterShow={toggleShowFilter}
        firstInputName="stars"
        firstInputValue={stars}
        firstInputLabel={'Stars'}
        firstInputPlaceholder="0 min"
        secondInputName="forks"
        secondInputValue={forks}
        secondInputLabel={'Forks'}
        secondInputPlaceholder="0 max"
        selectedLang={language}
        handleLangSelect={handleLangSelect}
        handleInputChange={handleInputChange}
      />
    </>
  )
}

export default RepositoriesSearchForm
