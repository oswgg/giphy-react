import { useState } from 'react'
import helpGifs from '../helpers/helpGifs'

const api = helpGifs()

const useGifs = () => {
   const [gifs, setGifs] = useState(null)
   const [error, setError] = useState(null)

   const getByDefault = () => {
      setGifs(null)
      api.getDefault()
         .then(res => {
            if (res.error) return Promise.reject(res)

            setGifs(res.data)
         })
         .catch(err => setError(err))
   }

   const getCategories = () => {
      setGifs(null)
      return api
         .getCategories()
         .then(res => {
            if (res.error) return Promise.reject(res)

            setGifs(res.data)
         })
         .catch(err => setError(err))
   }

   const getFromSearch = options => {
      setGifs(null)
      return api
         .getFromSearch(options)
         .then(res => {
            if (res.error) return Promise.reject(res)

            console.log(res)
            setGifs(res.data)
         })
         .catch(err => setError(err))
   }

   return { gifs, error, getByDefault, getCategories, getFromSearch }
}

export default useGifs
