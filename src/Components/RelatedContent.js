import React, { useEffect } from 'react'
import useGifs from '../Hooks/useGifs'
import GifsList from './GifsList'
import Subtitle from './Subtitle'
import { useLocation } from 'react-router-dom'

const RelatedContent = () => {
   const { gifs, error, getRelated } = useGifs()
   const { pathname } = useLocation()

   useEffect(() => {
      const options = {
         endpoint: 'related',
         limit: 20,
         gifID: pathname.split('-').at(-1),
      }
      getRelated(options)
   }, [])

   return (
      <div className='mt-8'>
         <Subtitle className='text-md text-white'>Related Gifs</Subtitle>
         {gifs && <GifsList gifs={gifs} isSearching={true} />}
      </div>
   )
}

export default RelatedContent
