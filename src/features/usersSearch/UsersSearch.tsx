import React from 'react'
import UserDetailModal from '../userDetails/UserDetailModal'
import UsersSearchForm from './UsersSearchForm'
import Users from './Users'

const UsersSearch: React.FC = () => {
  return (
    <>
      <UsersSearchForm />
      <Users />
      <UserDetailModal />
    </>
  )
}

export default UsersSearch
