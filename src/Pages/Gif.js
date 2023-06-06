import { useContext, useEffect } from 'react'
import GifContext from '../Context/GifContext'
const Gif = () => {
   const { gifInfo } = useContext(GifContext)

   return (
      <div>
         <img src={gifInfo.gif.images.downsized_large.url} />
         <h1 className='text-white'>{gifInfo.gif.title}</h1>
      </div>
   )
}

export default Gif
