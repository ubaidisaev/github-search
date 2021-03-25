import React from 'react'
import ReposPagination from './ReposPagination'
import ReposPerPage from './ReposPerPage'
import ReposList from './ReposList'

const Repositories: React.FC = () => {
  return (
    <>
      <ReposPerPage />
      <ReposList />
      <ReposPagination />
    </>
  )
}

export default Repositories
