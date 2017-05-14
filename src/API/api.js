/**
 * Created by mgab on 05/05/2017.
 */

const PARTNER_ID = process.env.REACT_APP_PARTNER_ID
const SERVER = process.env.REACT_APP_SERVER

export const login = (credentials) => {
  const LOTTOLAND_API_ENDPOINT = `${SERVER}/api/client/v1/players/login`
  const body = {
    username: credentials.username,
    password: credentials.password,
    client_id: PARTNER_ID,
    grant_type: 'password'
  }

  return fetch(LOTTOLAND_API_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json',
      'x-api-key': PARTNER_ID
    },
    body: JSON.stringify(body)
  }).then(response => {
    return response.json()
  }).then(json => {
    return json
  })
}

export const getLotteriesData = () => {
  const LOTTOLAND_API_ENDPOINT = `${SERVER}/api/client/v1/drawings`

  return fetch(LOTTOLAND_API_ENDPOINT, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json',
      'x-api-key': PARTNER_ID
    }
  }).then(response => {
    return response.json()
  }).then(json => {
    console.log('API: ', json)
    return json
  })
}