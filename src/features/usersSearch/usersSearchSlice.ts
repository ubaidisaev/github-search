import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getUsers } from 'api/githubAPI'
import { getTotalPagesFromLinkHeader } from 'api/helpers'
import { RootState } from 'store/rootReducer'
import { IUser, IUserSearchParams } from 'shared/types'
import { setNotification } from 'features/notification/notificationSlice'

interface IUsersState {
  usersList: IUser[]
  isLoading: boolean
  searchParams: IUserSearchParams
  totalPages: number
}

const initialState: IUsersState = {
  usersList: [],
  isLoading: false,
  totalPages: 0,
  searchParams: {
    username: '',
    language: null,
    perPage: 30,
    page: 1,
    minRepos: '',
    maxRepos: ''
  }
}

const usersList = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setSearchParams(state, action: PayloadAction<Partial<IUserSearchParams>>) {
      state.searchParams = { ...state.searchParams, ...action.payload }
    },
    setUsersLoading(state, action) {
      const { isLoading } = action.payload
      state.isLoading = isLoading
    },
    resetSearchParams(state) {
      state.searchParams = initialState.searchParams
      state.usersList = []
      state.totalPages = 0
    },
    getUsersStart(state) {
      state.isLoading = true
    },
    getUsersSuccess(state, action) {
      state.usersList = action.payload.users
      state.totalPages = action.payload.totalPages
    }
  }
})

export const {
  getUsersSuccess,
  getUsersStart,
  setSearchParams,
  resetSearchParams,
  setUsersLoading
} = usersList.actions

export const fetchUsersList = () => async (
  dispatch: any,
  getState: () => RootState
) => {
  // TODO: how to get data from the store ? pass them from component as props or get them here
  const { users: { searchParams } } = getState();
  try {
    dispatch(setUsersLoading({ isLoading: true }))
    const response = await getUsers(searchParams)
    const totalPages = getTotalPagesFromLinkHeader(response.headers.link)
    dispatch(
      getUsersSuccess({ users: response.data.items, totalPages })
    )
    dispatch(setUsersLoading({ isLoading: false }))
  } catch (err) {
    dispatch(setNotification(err.message))
  }
}

export default usersList.reducer
