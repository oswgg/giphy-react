/* eslint-disable indent */
import { SEARCH_TYPES } from './types'

const apiKey = 'E3tz28FivKKk4RtmkZdHwppgGlDCLcgr'

const helpGifs = () => {
   const fetchGifs = url => {
      return fetch(url)
         .then(res => res.json())
         .then(data => {
            if (data.meta.status !== 200)
               return Promise.reject({
                  error: true,
                  status: data.meta.status,
                  statusText: data.meta.msg,
               })

            return data
         })
         .catch(err => err)
   }

   const getDefault = () =>
      fetchGifs(
         `http://api.giphy.com/v1/gifs/trending?&api_key=${apiKey}&limit=20`
      )

   const getCategories = () =>
      fetchGifs(
         `http://api.giphy.com/v1/gifs/categories?&api_key=${apiKey}&limit=20`
      )

   const getFromSearch = options => {
      const { limit, page, search, type } = options

      const url =
         type === SEARCH_TYPES.UNIQUE
            ? `http://api.giphy.com/v1/gifs/${search}?api_key=${apiKey}`
            : `http://api.giphy.com/v1/gifs/search?&api_key=${apiKey}&limit=${limit}&offset=${
                 page * limit
              }&q=${search}}`

      return fetchGifs(url)
   }

   const getRelatedContent = options => {
      const { endpoint, limit, gifID } = options
      const url = `http://api.giphy.com/v1/gifs/${endpoint}?gif_id=${gifID}&api_key=Gc7131jiJuvI7IdN0HZ1D7nh0ow5BU6g&limit=${limit}`
      return fetchGifs(url)
   }

   return { getDefault, getCategories, getFromSearch, getRelatedContent }
}
export default helpGifs
