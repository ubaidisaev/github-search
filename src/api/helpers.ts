import { IRepoSearchParams, IUserSearchParams } from 'shared/types'

export function getTotalPagesFromLinkHeader(link?: string): number {
  if (link === undefined) {
    return 0
  }

  const lastPageMatch = link.match(/&page=(\d+)>; rel="last"/)
  if (lastPageMatch) {
    return Number(lastPageMatch[1])
  }

  const prevPageMatch = link.match(/&page=(\d+)>; rel="prev"/)
  if (prevPageMatch) {
    return Number(prevPageMatch[1]) + 1
  }
  return 0
}

export const constructReposNumberQuery = (
  minRepos?: IUserSearchParams['minRepos'],
  maxRepos?: IUserSearchParams['maxRepos']
) => {
  if (maxRepos === undefined && (minRepos && minRepos > 0)) {
    return `+repos:>${minRepos}`
  }
  if (minRepos === undefined && (maxRepos && maxRepos > 0)) {
    return `+repos:<${maxRepos}`
  }
  if (minRepos && maxRepos) {
    return `+repos:${minRepos}..${maxRepos}`
  }
  return ''
}

export const constructUsersSearchQuery = (filters: IUserSearchParams) => {
  const { language, username = '', minRepos, maxRepos, perPage, page } = filters
  let q = `${username}`
  q += constructReposNumberQuery(minRepos, maxRepos)
  if (language) q += `+language:${language}`
  if (perPage) q += `&per_page=${perPage}`
  if (page) q += `&page=${page}`
  return q
}

export function constructRepositoriesSearchQuery(filters: IRepoSearchParams) {
  const { reponame = '', repoowner = '', stars, forks, perPage, page } = filters
  let q = `${reponame}`
  if (forks) q += `+forks:>${forks}`
  if (stars) q += `+stars:>${stars}`
  if (repoowner) q += `+user:${repoowner}`
  if (perPage) q += `&per_page=${perPage}`
  if (page) q += `&page=${page}`
  return q
}
