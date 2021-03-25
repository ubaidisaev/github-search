import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getRepositories } from 'api/githubAPI'
import { getTotalPagesFromLinkHeader } from 'api/helpers'
import { RootState } from 'store/rootReducer'
import { IRepoSearchParams, IRepo } from 'shared/types'
import { setNotification } from 'features/notification/notificationSlice'

interface IRepositoriesState {
  searchParams: IRepoSearchParams
  repositories: IRepo[]
  totalPages: number
  isLoading: boolean
}

const initialState: IRepositoriesState = {
  searchParams: {
    reponame: '',
    repoowner: '',
    perPage: 30,
    page: 1,
    language: ''
  },
  repositories: [],
  totalPages: 0,
  isLoading: false
}

const usersList = createSlice({
  name: 'repositories',
  initialState,
  reducers: {
    setSearchParams(state, action: PayloadAction<Partial<IRepoSearchParams>>) {
      state.searchParams = { ...state.searchParams, ...action.payload }
    },
    setRepositoriesLoading(state, action) {
      const { isLoading } = action.payload
      state.isLoading = isLoading
    },
    getRepositoriesSuccess(state, action) {
      state.repositories = action.payload.repositories
      state.totalPages = action.payload.totalPages
    },
    resetSearchParams(state) {
      state.searchParams = initialState.searchParams
      state.repositories = []
      state.totalPages = 0
    }
  }
})

export const {
  setSearchParams,
  getRepositoriesSuccess,
  setRepositoriesLoading,
  resetSearchParams
} = usersList.actions

export const fetchReposList = () => async (
  dispatch: any,
  getState: () => RootState
) => {
  // TODO: how to get data from the store ? pass them from component as props or get them here
  const {
    repositories: { searchParams }
  } = getState()
  try {
    dispatch(setRepositoriesLoading({ isLoding: true }))
    const response = await getRepositories(searchParams)
    console.log('response', response)
    const totalPages = getTotalPagesFromLinkHeader(response.headers.link)
    dispatch(
      getRepositoriesSuccess({ repositories: response.data.items, totalPages })
    )
    dispatch(setRepositoriesLoading({ isLoding: false }))
  } catch (err) {
    dispatch(setNotification(err.message))
  }
}

export default usersList.reducer
