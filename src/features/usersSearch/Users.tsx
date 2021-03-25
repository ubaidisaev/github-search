import React from 'react'
import UsersPagination from './UsersPagination'
import UsersList from './UsersList'

const Users: React.FC = () => {
  return (
    <>
      <UsersList />
      <UsersPagination />
    </>
  )
}

export default Users
