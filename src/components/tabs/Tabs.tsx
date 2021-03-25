import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './tabs.module.css'

interface ITab {
  label: string | React.ReactNode
  link?: string
}
interface ITabsProps {
  activeTab?: number
}

interface IState {
  active: number
}

const tabs: ITab[] = [
  {
    label: 'Пользователей',
    link: '/search/users'
  },
  {
    label: 'Репозитории',
    link: '/search/repositories'
  }
]

class Tabs extends React.Component<ITabsProps> {
  readonly state: IState = {
    active: 0
  }

  get activeTab() {
    return this.props.activeTab || this.props.activeTab === 0
      ? this.props.activeTab
      : this.state.active
  }

  handlerActionTab = (i: number) => {
    this.setState({ active: i })
  }

  render() {
    return (
      <div className={styles.header}>
        {tabs.map((item, i) => {
          if (item.link) {
            return (
              <NavLink
                key={item.link}
                to={item.link}
                activeClassName={styles.tabsItemActive}
                className={styles.tabsItem}
              >
                {item.label}
              </NavLink>
            )
          }
          let tabLabelClasses = `${styles.tabsItem} ${
            this.activeTab === i ? styles.tabsItemActive : ''
          }`
          return (
            <span
              key={i}
              onClick={this.handlerActionTab.bind(this, i)}
              className={tabLabelClasses}
            >
              {item.label}
            </span>
          )
        })}
      </div>
    )
  }
}

export default Tabs
