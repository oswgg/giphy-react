import { useEffect } from 'react'
import useGifs from '../Hooks/useGifs'
import Subtitle from './Subtitle'
import TrendingCard from './TrendingCard'

const TrendingList = () => {
   const { gifs, error, getByDefault } = useGifs()

   useEffect(() => {
      getByDefault()
   }, [])

   return (
      <div className='mt-5'>
         <Subtitle>Trending</Subtitle>
         <div className='flex overflow-scroll gap-2 mt-2 no-scroll-bar'>
            {gifs && !error ? (
               gifs.map((el, i) => <TrendingCard el={el} key={i} />)
            ) : (
               <div className='spinner' />
            )}
         </div>
      </div>
   )
}

export default TrendingList
