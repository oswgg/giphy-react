import React, { useEffect } from 'react'
import HashTagItem from './HashTagItem'
import useGifs from '../Hooks/useGifs'
import { useLocation } from 'react-router-dom'

const HashTagsList = () => {
   const { gifs, error, getRelated } = useGifs()
   const { pathname } = useLocation()

   useEffect(() => {
      const options = {
         endpoint: 'related',
         limit: 1,
         gifID: pathname.split('-').at(-1),
      }
      getRelated(options)
   }, [])
   return (
      <div className='flex gap-2 flex-wrap text-white mt-8 '>
         {gifs && gifs[0].tags.map((el, i) => <HashTagItem tag={el} key={i} />)}
      </div>
   )
}

export default HashTagsList
