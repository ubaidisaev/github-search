import React from 'react'

import styles from './users.module.css'
import { IUser } from 'shared/types'

interface IUserProps {
  user: IUser
  onUserSelect: (userID: string | number) => void
}

const User: React.FC<IUserProps> = ({ user, onUserSelect }) => {
  const handleUserSelect = () => {
    onUserSelect(user.login)
  }
  return (
    <li
      className={styles.usersListItem}
      key={user.id}
      onClick={handleUserSelect}
    >
      <img
        className={styles.usersListItemImg}
        src={user.avatar_url}
        alt={user.login}
      />
    </li>
  )
}

export default User
