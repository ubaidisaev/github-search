import { Dispatch } from 'react'
import { AnyAction, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getUserDetails } from 'api/githubAPI'
import { IUserDetails } from 'shared/types'
import { setNotification } from 'features/notification/notificationSlice'

interface IUserDetailsModal {
  selectedUser: string | number | null
  userDetails: IUserDetails | null
  userDetailsLoading: boolean
}

const initialState: IUserDetailsModal = {
  selectedUser: null,
  userDetails: null,
  userDetailsLoading: false
}

const repoDetails = createSlice({
  name: 'userDetails',
  initialState,
  reducers: {
    selectCurrentUser(state, action) {
      state.selectedUser = action.payload
    },
    openUserDetails(state, action) {
      state.selectedUser = action.payload
    },
    closeUserDetails(state) {
      state.selectedUser = null
      state.userDetails = null
    },
    getUserDetailsStart(state) {
      state.userDetailsLoading = true
    },
    getUserDetailsSuccess(state, action: PayloadAction<IUserDetails>) {
      state.userDetailsLoading = false
      state.userDetails = action.payload
    },
    getRepoDetailsFailed(state, action: PayloadAction<string>) {}
  }
})

export const {
  getUserDetailsStart,
  getUserDetailsSuccess,
  selectCurrentUser,
  closeUserDetails
} = repoDetails.actions

export default repoDetails.reducer

export const fetchUserDetails = (username: string | number) => async (
  dispatch: Dispatch<AnyAction>
) => {
  try {
    dispatch(getUserDetailsStart())
    const response = await getUserDetails(username)
    dispatch(getUserDetailsSuccess(response.data))
  } catch (err) {
    dispatch(setNotification(err.message))
  }
}
