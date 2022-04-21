import axios from 'axios'
import useSWR, { useSWRConfig } from 'swr'
import { store } from '../store/store'
import { closeAll } from '../store/slices/layoutSlice'

axios.defaults.baseURL = axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.withCredentials = false

const appAPI = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})


export const createAPIRequest = (requestOption) => {
  const { method, url, data, configs, accessToken } = requestOption

  let reqConfigs = configs || {}
  let headers = {}
  if (accessToken) {
    headers.Authorization = `Bearer ${accessToken}`
  }

  reqConfigs = { ...configs, headers: { ...headers, ...(reqConfigs.headers || {}) } }
  const apiInstance = appAPI

  return new Promise((resolve, reject) =>
    apiInstance
      .request({ method, url, data, ...reqConfigs })
      .then((response) => resolve(response.data))
      .catch((error) => {
        if (error?.response?.status === 500) {
          store.dispatch(closeAll())
          // router.push('/500')
        }
        return reject(error.response)
      })
  )
}

export const createAppAPIRequest = (requestOption) => createAPIRequest(requestOption)

const appFetcher = (requestsOptions) => {
  if (Array.isArray(requestsOptions)) {
    const requestsPromise = requestsOptions.map((requestOpt) => createAppAPIRequest(requestOpt))
    return Promise.all(requestsPromise)
  }

  return createAppAPIRequest(requestsOptions)
}


export const useApiRequest = (reqOptions, config) => {
  const key = [reqOptions]
  const { cache } = useSWRConfig()
  if (config?.discardCache) {
    cache.delete(key)
  }
  return useSWR(key, appFetcher, {
    shouldRetryOnError: false,
    revalidateIfStale: false,
    revalidateOnMount: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
    ...config,
  })
}
