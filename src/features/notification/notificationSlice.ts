import { createSlice } from '@reduxjs/toolkit'

interface UNotificationState {
  text: string | null
}

const initialState: UNotificationState = {
  text: null
}

const notification = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotification(state, action) {
      state.text = action.payload
    },
    removeNotification(state) {
      state.text = null
    }
  }
})

export const { setNotification, removeNotification } = notification.actions

export default notification.reducer

// export const fetchUserDetails = (username: string | number) => async (
//   dispatch: Dispatch<AnyAction>
// ) => {
//   try {
//     dispatch(getUserDetailsStart())
//     const response = await getUserDetails(username)
//     dispatch(getUserDetailsSuccess(response.data))
//   } catch (err) {
//     console.log('problem loading users', err)
//   }
// }
