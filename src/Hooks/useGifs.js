import { useState } from 'react'
import helpGifs from '../helpers/helpGifs'

const api = helpGifs()

const useGifs = () => {
   const [gifs, setGifs] = useState(null)
   const [error, setError] = useState(null)
   const [pagination, setPagination] = useState(null)

   const getByDefault = () => {
      api.getDefault()
         .then(res => {
            if (res.error) return Promise.reject(res)

            setGifs(res.data)
         })
         .catch(err => setError(err))
   }

   const getCategories = () => {
      api.getCategories()
         .then(res => {
            if (res.error) return Promise.reject(res)

            setGifs(res.data)
         })
         .catch(err => setError(err))
   }

   return { gifs, error, getByDefault, getCategories }
}

export default useGifs
