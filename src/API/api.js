/**
 * Created by mgab on 05/05/2017.
 */

const PARTNER_ID = process.env.REACT_APP_PARTNER_ID
const SERVER = process.env.REACT_APP_SERVER

export const login = (credentials) => {
  const LOTTOLAND_API_ENDPOINT = `${SERVER}/api/client/v1/players/login`
  const body = {
    grant_type: 'password',
    username: credentials.username,
    password: credentials.password,
    client_id: PARTNER_ID
  }

  return fetch(LOTTOLAND_API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Accept': 'application/json',
        'X-API-KEY': PARTNER_ID
      },
      body: body
    }
  ).then(response => {
    console.log('>>> response: ', response)
    return response.json()
  }).then(json => {
    return json
  })
}
