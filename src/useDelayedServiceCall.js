import { useState, useCallback } from 'react'

export function useDelayedServiceCall(service, endpoint, params = {}) {
  console.log('useDelayedServiceCall called')
  const [response, setResponse] = useState({})

  const fetch = useCallback((requestData) => {
    console.log(`requesting ${service}/${endpoint} with request ${JSON.stringify(requestData)}`)
    setResponse({ loading: true })
    setTimeout(() => {
      console.log('delayed network request returned!')
      const data = requestData * 2
      setResponse({ loading: false, data })
      params.onSuccess && params.onSuccess(data, requestData)
    }, 2000)  
  }, [service, endpoint, params])

  return [response, fetch]
} 