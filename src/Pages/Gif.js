import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import useGifs from '../Hooks/useGifs'
import { SEARCH_TYPES } from '../helpers/types'
import NotFound from './NotFound'
import GifInfo from '../Components/GifInfo'

const Gif = () => {
   const { pathname } = useLocation()
   const { getFromSearch, error, gifs } = useGifs()
   useEffect(() => {
      const gifID = pathname.split('-').at(-1)
      console.log(pathname)
      console.log(gifID)

      getFromSearch({
         type: SEARCH_TYPES.UNIQUE,
         search: gifID,
      })
   }, [pathname])

   return <div>{gifs && !error ? <GifInfo data={gifs} /> : <NotFound />}</div>
}

export default Gif
