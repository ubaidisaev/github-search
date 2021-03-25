import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store/rootReducer'
import Preloader from 'components/preloader/Preloader'
import { selectCurrentUser } from 'features/userDetails/userDetailsSlice'
import User from './User'
import UsersPerPage from './UsersPerPage'
import styles from './users.module.css'

const UsersList: React.FC = () => {
  const dispatch = useDispatch()
  const usersList = useSelector((state: RootState) => state.users.usersList)
  const isLoading = useSelector((state: RootState) => state.users.isLoading)
  const totalPages = useSelector((state: RootState) => state.users.totalPages)

  const onUserSelect = (user: string | number) => {
    dispatch(selectCurrentUser(user))
  }
  if (isLoading) return <Preloader />

  return (
    <>
    {totalPages ? <UsersPerPage /> : null}
      <ul className={styles.usersList}>
        {usersList.map(u => (
          <User onUserSelect={onUserSelect} user={u} key={u.id} />
        ))}
      </ul>
    </>
  )
}

export default UsersList
