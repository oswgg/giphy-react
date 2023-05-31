import { useEffect } from 'react'
import useGifs from '../Hooks/useGifs'
import Subtitle from './Subtitle'

const TrendingList = () => {
   const { gifs, error, get } = useGifs({ endpoint: 'trending' })

   useEffect(() => {
      get()
   }, [])

   return (
      <div className='mt-5'>
         <Subtitle>Trending</Subtitle>
         <div className='flex overflow-scroll gap-2 mt-2 no-scroll-bar'>
            {gifs.length !== 0 && !error.error ? (
               gifs.map((el, i) => (
                  <img
                     key={i}
                     src={el.images.downsized_medium.url}
                     className='h-32 object-fill rounded-md grow'
                  />
               ))
            ) : (
               <div className='spinner' />
            )}
         </div>
      </div>
   )
}

export default TrendingList
