import { useEffect } from 'react'
import useGifs from '../Hooks/useGifs'
import GifCard from './GifCard'

const GifsList = ({ gifs, isSearching }) => {
   return (
      <div className='flex flex-wrap gap-4 mt-2 mb-8'>
         {gifs &&
            gifs.map((el, i) => (
               <GifCard data={el} key={i} isSearching={isSearching} index={i} />
            ))}
      </div>
   )
}

export default GifsList
