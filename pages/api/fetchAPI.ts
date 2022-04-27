// @ts-nocheck
import axios from 'axios'
// import { API_URL, API_TOKEN } from '~config'

export function fetchAPI(options, success = (data) => {}, error = () => {}) {
  const { method = 'GET' } = options

  const config = {
    baseURL: options.baseURL || 'http://localhost:1337',
    method,
    headers: {
      ...options.headers,
    },
    ...options,
  }

  return axios(config)
    .then(({ data }) => {
      success(data)
      return data
    })
    .catch((err) => {
      error()
      return err
    })
}
