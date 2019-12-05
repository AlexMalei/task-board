import { useState, useEffect } from 'react'

export const useAsync = (getMethod, ...params) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  const getResource = async () => {
    try {
      setLoading(true)
      const result = await getMethod(...params)
      setData(result)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    getResource()
  }, params)

  return { loading, error, data }
}
