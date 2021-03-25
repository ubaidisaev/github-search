import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Toast } from 'components/toast'
import { RootState } from 'store/rootReducer'
import { removeNotification } from './notificationSlice'

const TIMEOUT = 3000

const Notification: React.FC = ({ children }) => {
  const notification = useSelector(
    (state: RootState) => state.notification.text
  )
  const dispatch = useDispatch()

  const clearNotifications = useCallback(() => {
    setTimeout(() => {
      dispatch(removeNotification())
    }, TIMEOUT)
  }, [dispatch])

  useEffect(() => {
    if (notification) clearNotifications()
  }, [notification, clearNotifications])
  return notification ? <Toast>{notification}</Toast> : null
}

export default Notification
