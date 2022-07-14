import { useState } from 'react'
import axios from 'axios'

interface UseFetchProps {
  url: string
  method?: 'GET'
}

export const useFetch = <T>({ url, method = 'GET' }: UseFetchProps) => {
  const [myRes, setMyRes] = useState<T | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const callFetch = () => {
    axios(url, { method: method })
      .then((res) => {
        console.log('successfull fetch for ', url, ' -> ', res.data)
        setMyRes(res.data)
      })
      .catch((err) => console.log('something happened -> ', err))
      .finally(() => setIsLoading(false))
  }

  const callRefetch = () => {
    setIsLoading(true)
    callFetch()
  }

  return { callFetch, callRefetch, isLoading, myRes }
}
