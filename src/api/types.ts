import { IRepo, IUser } from 'shared/types'

export interface Label {
  id: number
  name: string
  color: string
}

export interface IUsersList {
  total_count: number
  incomplete_results: boolean
  items: IUser[]
}

export interface IRepositoriesList {
  total_count: number
  incomplete_results: boolean
  items: IRepo[]
}

export interface RepoDetails {
  id: number
  name: string
  full_name: string
  open_issues_count: number
}
