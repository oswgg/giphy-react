import { useEffect } from 'react'
import useGifs from '../Hooks/useGifs'
import GifCard from './GifCard'

const GifsList = props => {
   const { endpoint, query = '', handleCounter, offset } = props

   const isSearching = query !== ''

   const optionsForGifs = {
      endpoint: isSearching ? endpoint : 'categories',
      query,
      offset,
   }
   if (!query) delete optionsForGifs.query

   const { gifs, error, get, pagination } = useGifs(optionsForGifs)

   useEffect(() => {
      get()
      if (isSearching) handleCounter(pagination.total_count)
   }, [endpoint, query, pagination.total_count, offset])

   return (
      <div className='flex flex-wrap gap-4 mt-2 mb-8'>
         {gifs.length !== 0 && !error.error ? (
            gifs.map((el, i) => (
               <GifCard data={el} key={i} isSearching={isSearching} index={i} />
            ))
         ) : (
            <div className='spinner' />
         )}
      </div>
   )
}

export default GifsList
