const BASE_URL = 'https://api.github.com/users/FelipeAlfaya'

export const requests = {
  fetchRepositories: async () => {
    const response = await fetch(`${BASE_URL}/repos`)
    const data = await response.json()
    return data
  },
  fetchFollowers: async () => {
    const response = await fetch(`${BASE_URL}/followers`)
    const data = await response.json()
    return data
  },
  fetchFollowing: async () => {
    const response = await fetch(`${BASE_URL}/following`)
    const data = await response.json()
    return data
  },
  fetchUser: async () => {
    const response = await fetch(`${BASE_URL}`)
    const data = await response.json()
    return data
  },
  // fetchAvatar: async () => {
  //   const response = await fetch(`${BASE_URL}/avatar`)
  //   const data = await response.json()
  //   return data
  // },
}

export default requests
