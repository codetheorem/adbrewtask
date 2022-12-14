import axios from 'axios'
const { apiURL,APP_ENV } = require('../config.json')

const config = {
    baseURL: apiURL,
    withCredentials: true,
    ContentType: 'application/json',
  }

  const apiClient = axios.create(config)

  apiClient.interceptors.response.use(
    (response) => {
      if (APP_ENV !== 'prod') {
        console.log('RESPONSE: ', response)
      }
      return response
    },
    (error) => {
      if (error.response) {
        // The request was made and the server responded with a status code
        console.log('RESPONSE_ERROR: ', error.response)
        return Promise.reject(error.response)
      } else if (error.request) {
        // The request was made but no response was received
        console.log('NO_RESPONSE: ', error.request)
      } else {
        // Something happened in setting up the request that triggered an error
        console.log('REQUEST_ERROR: ', error.message)
      }
    })

      
      export default apiClient  