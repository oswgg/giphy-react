import { useState } from 'react'
import helpGifs from '../helpers/helpGifs'

const api = helpGifs()

const useGifs = options => {
   const [gifs, setGifs] = useState([])
   const [error, setError] = useState({})
   const [pagination, setPagination] = useState({})

   const get = () => {
      setGifs([])

      api.get(options)
         .then(res => {
            if (res.error) Promise.reject(res)
            const { gifs, pagination } = res
            setGifs([...gifs])
            setPagination(pagination)
         })
         .catch(err => setError(err))
   }

   return { gifs, error, get, pagination }
}

export default useGifs
