import React from 'react'
import Button from 'components/button/Button'
import TextInput from 'components/textinput/TextInput'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store/rootReducer'
import { fetchUsersList, setSearchParams } from './usersSearchSlice'
import styles from './users.module.css'

const SearchForm = () => {
  const dispatch = useDispatch()
  const username = useSelector(
    (state: RootState) => state.users.searchParams.username
  )

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchParams({ username: event.target.value }))
  }

  const handleButtonClick = () => {
    dispatch(fetchUsersList())
  }

  return (
    <>
      <TextInput
        placeholder="Email/Username/Full name"
        name="username"
        value={username}
        onChange={handleInputChange}
      />
      <Button className={styles.userSearchBtn} onClick={handleButtonClick} />
    </>
  )
}

export default SearchForm
