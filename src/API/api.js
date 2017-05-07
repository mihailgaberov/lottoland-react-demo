/**
 * Created by mgab on 05/05/2017.
 */
require('dotenv').config();

const CLIENT_ID = process.env.CLIENT_ID
const SERVER = process.env.SERVER

export const login = (credentials) => {
  console.log('>>> cluient: ', CLIENT_ID)
  console.log('>>> SERVER: ', SERVER)

  const LOTTOLAND_API_ENDPOINT = `${SERVER}/api/client/v1/players/login`
  const body = {
    grant_type: 'password',
    username: credentials.name,
    password: credentials.password,
    client_id: CLIENT_ID
  }

  console.log(LOTTOLAND_API_ENDPOINT)

  return fetch(LOTTOLAND_API_ENDPOINT, { method: 'POST', body: body})
    .then(response => {
      return response.json()
    })
    .then(json => {
      return json.access_token !== null && json.error === null
    })
}
