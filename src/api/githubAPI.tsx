import axios from 'axios'
import {
  constructRepositoriesSearchQuery,
  constructUsersSearchQuery
} from './helpers'
import {
  IRepoSearchParams,
  IUserSearchParams,
  IUserDetails
} from 'shared/types'
import { IUsersList, IRepositoriesList } from './types'

const baseUrl = 'https://api.github.com/search'

export async function getUsers(filters: IUserSearchParams) {
  const url = `${baseUrl}/users?q=${constructUsersSearchQuery(filters)}`
  return axios.get<IUsersList>(url)
}

export async function getUserDetails(username: string | number) {
  const url = `https://api.github.com/users/${username}`
  return axios.get<IUserDetails>(url)
}

export async function getRepositories(filters: IRepoSearchParams) {
  const url = `${baseUrl}/repositories?q=${constructRepositoriesSearchQuery(
    filters
  )}`
  return axios.get<IRepositoriesList>(url)
}
