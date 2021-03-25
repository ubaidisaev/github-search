import React from 'react'
import styles from './repositoriesSearch.module.css'

import { useDispatch } from 'react-redux'
import { selectCurrentUser } from 'features/userDetails/userDetailsSlice'
import { IRepo } from 'shared/types'

type IRepoItem = {
  repo: IRepo
}

const RepoItem: React.FC<IRepoItem> = ({ repo }) => {
  const dispatch = useDispatch()

  const onUserSelect = () => {
    dispatch(selectCurrentUser(repo.owner.login))
  }

  return (
    <li className={styles.repositoriesSearchItem} key={repo.id}>
      <div className={styles.repoheader}>
        <div className={styles.reponame}>{repo.name}</div>
        <div>
          Owner:{' '}
          <span className={styles.repoownername} onClick={onUserSelect}>
            {repo.owner.login}
          </span>
        </div>
      </div>
      <div className={styles.repodesc}>{repo.description}</div>
      <div className={styles.repofooter}>
        <div className={styles.repostats}>
          <div>
            <span className={styles.repostatsname}>Stars:</span>
            <span className={styles.repostatsvalue}>
              {repo.stargazers_count}
            </span>
          </div>
          <div>
            <span className={styles.repostatsname}>Forks:</span>
            {repo.stargazers_count}
          </div>
          <div>
            <span className={styles.repostatsname}>Opened issies: </span>
            {repo.stargazers_count}
          </div>
        </div>
        <div className={styles.repolastupdate}>
          Last updated: {new Date(repo.updated_at).toLocaleDateString()}
        </div>
      </div>
    </li>
  )
}

export default RepoItem
