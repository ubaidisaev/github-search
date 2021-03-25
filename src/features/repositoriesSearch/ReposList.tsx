import Preloader from 'components/preloader/Preloader'
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'store/rootReducer'
import RepoItem from './RepoItem'

import styles from './repositoriesSearch.module.css'

const ReposList: React.FC = () => {
  const repositories = useSelector(
    (state: RootState) => state.repositories.repositories
  )
  const isLoading = useSelector(
    (state: RootState) => state.repositories.isLoading
  )

  if (isLoading) return <Preloader />

  return (
    <>
      <ul className={styles.repositoriesSearch}>
        {repositories.map(repo => (
          <RepoItem key={repo.id} repo={repo} />
        ))}
      </ul>
    </>
  )
}

export default ReposList
