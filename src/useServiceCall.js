import { useState, useEffect } from 'react'

export function useServiceCall(service, endpoint, requestData, params = {}) {
  console.log('useServiceCall called')
  const [response, setResponse] = useState({ loading: true })

  useEffect(() => {
    console.log(`requesting ${service}/${endpoint} with request ${JSON.stringify(requestData)}`)
    setResponse({ loading: true })
    setTimeout(() => {
      console.log('network request returned!')
      const response = Array.from({ length: 5 }, (_, index) => index + +requestData.startingNumber)
      setResponse({ loading: false, data: response})
    }, 2000)  
  }, params.deps || [])

  return response
}