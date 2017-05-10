/**
 * Created by mgab on 05/05/2017.
 */

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
const SERVER = process.env.REACT_APP_SERVER

export const login = (credentials) => {
  const LOTTOLAND_API_ENDPOINT = `${SERVER}/api/client/v1/players/login`
  const body = {
    grant_type: 'password',
    username: credentials.username,
    password: credentials.password,
    client_id: CLIENT_ID
  }

  return fetch(LOTTOLAND_API_ENDPOINT, { method: 'POST', body: body })
    .then(response => {
      return response.json()
    })
    .then(json => {
      return json
    })
}
