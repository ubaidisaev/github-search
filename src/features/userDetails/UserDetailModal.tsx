import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store/rootReducer'
import Preloader from 'components/preloader/Preloader'
import {
  fetchUserDetails,
  closeUserDetails
} from 'features/userDetails/userDetailsSlice'

import styles from './userdetails.module.css'
import { IUserDetails } from 'shared/types'

const UserDetailModal: React.FC = () => {
  const modalRef = useRef<HTMLDivElement>(null)

  const dispatch = useDispatch()
  const { selectedUser, userDetailsLoading, userDetails } = useSelector(
    (state: RootState) => state.userDetails
  )

  useEffect(() => {
    if (selectedUser) dispatch(fetchUserDetails(selectedUser))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedUser])

  const outsideClickListener = (event: any) => {
    if (!modalRef.current) return
    if (!modalRef.current.contains(event.target)) {
      dispatch(closeUserDetails())
    }
  }

  React.useEffect(() => {
    if (selectedUser) {
      document.addEventListener('click', outsideClickListener)
      return () => document.removeEventListener('click', outsideClickListener)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedUser])

  const renderContent = (userDetails: IUserDetails) => {
    return (
      <div className={styles.userInfo} ref={modalRef}>
        <img
          src={userDetails.avatar_url}
          className={styles.userAvatar}
          alt=""
        />
        <div className={styles.userDetails}>
          <span className={styles.userName}>{userDetails.name}</span>
          <span className={styles.userLogin}>{userDetails.login}</span>
          {userDetails.location && (
            <span className={styles.userLocation}>{userDetails.location}</span>
          )}
          <span>Alamofire</span>
          <div className={styles.userDetailsBottom}>
            <span className={styles.userDetailsBottomInfo}>Followers: 567</span>
            <span className={styles.userDetailsBottomInfo}>Followers: 567</span>
            <span className={styles.userDetailsBottomInfo}>Followers: 567</span>
          </div>
        </div>
      </div>
    )
  }

  if (!selectedUser) return null

  return (
    <div className={styles.modal}>
      <div className={styles.modalOverlay} />
      <div className={styles.modalContent}>
        {userDetailsLoading && (
          <Preloader className={styles.modalContentPreloader} />
        )}
        {userDetails && renderContent(userDetails)}
      </div>
    </div>
  )
}

export default UserDetailModal
