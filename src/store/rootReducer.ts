import { combineReducers } from '@reduxjs/toolkit'

import usersSlice from 'features/usersSearch/usersSearchSlice'
import userDetailsSlice from 'features/userDetails/userDetailsSlice'
import repositoriesSlice from 'features/repositoriesSearch/repositoriesSearchSlice'
import notificationSlice from 'features/notification/notificationSlice'

const rootReducer = combineReducers({
  users: usersSlice,
  repositories: repositoriesSlice,
  userDetails: userDetailsSlice,
  notification: notificationSlice
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
