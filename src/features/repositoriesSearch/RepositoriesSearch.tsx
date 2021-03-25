import React from 'react'
import Repositories from './Repositories'
import RepositoriesSearchForm from './RepositoriesSearchForm'
import UserDetailModal from 'features/userDetails/UserDetailModal'

const RepositoriesSearch: React.FC = () => (
  <div>
    <RepositoriesSearchForm />
    <Repositories />
    <UserDetailModal />
  </div>
)

export default RepositoriesSearch
