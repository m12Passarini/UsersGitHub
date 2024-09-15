import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
})

export default api;

export const getUser = async (login) => api.get(`/users/${login}`)

export const getRepos = async (login) => api.get(`users/${login}/repos`)

export const langColors = {
  javascript: '#f1c40f',
  java: '#cf4023',
  typescript: '#2980b9',
  python: '#2ecc71',
  html: '#e67e22',
  css: '#9b59b6',
  scss: '#9b59b6',
  vue: '#1abc9c',
  php: '#3498db',
  go: '#72aed8',
  ruby: '#e74c3c',
  c: '16a085',
  'c#': '#27ae60',
  'c++': '#7f8c8d',
}

export const getLangsFrom = (repositories) => {
  let stats = repositories
    .map((repo) => repo.language).reduce(
      (data, language) => ({
        ...data, [language]: (data[language] || 0) + 1,
      }), []
    )

  delete stats.null

  stats = Object.keys(stats).map((language) => ({
    name: language,
    count: stats[language],
    color: langColors[language.toLowerCase()]
  }))
  .sort((a, b) => b.count - a.count)

  return stats
}
