import React from 'react'
import { Header } from 'components/header/Header'
import Tabs from 'components/tabs/Tabs'
import Notification from 'features/notification/Notification'

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <Tabs />
      {children}
      <Notification />
    </>
  )
}

export default Layout
