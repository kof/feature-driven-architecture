import camelizeKeys from 'camelcase-keys'

const API_ROOT = 'https://api.github.com/'

// Extracts the next page URL from Github API response.
const getLink = (rel, response) => {
  const link = response.headers.get('link')
  if (!link) {
    return null
  }

  const nextLink = link.split(',').find(s => s.indexOf(`rel="${rel}"`) > -1)
  if (!nextLink) {
    return null
  }

  return nextLink
    .trim()
    .split(';')[0]
    .slice(1, -1)
}

// Fetches an API response and normalizes the result JSON according to schema.
// This makes every API response have the same shape, regardless of how nested it was.
export const call = endpoint => {
  const url = endpoint.indexOf(API_ROOT) !== 0 ? API_ROOT + endpoint : endpoint

  return fetch(url).then(response =>
    response.json().then(json => {
      if (!response.ok) {
        return Promise.reject(json)
      }

      const result = camelizeKeys(json, { deep: true })
      const nextPageUrl = getLink('next', response)
      const lastPageUrl = getLink('last', response)
      return { result, nextPageUrl, lastPageUrl }
    })
  )
}
