import React from 'react'
import Subtitle from './Subtitle'

const GifInfo = ({ data }) => {
   return (
      <div className='flex gap-2 '>
         <div className='w-[28%] bg-red-50'></div>
         <div className='grow '>
            <Subtitle className='text-sm text-[#a6a6a6] '>
               {data.title}
            </Subtitle>
            <div className='flex flex-row gap-8'>
               <div className='w-8/12'>
                  <img src={data.images.downsized_large.url} className='' />
               </div>
               <div className=''>
                  <div>
                     <span>{'>'}</span>
                     <span>{'<'}</span>
                  </div>
                  <ul className='flex flex-col gap-3 text-white'>
                     <li>Favorite</li>
                     <li>Share</li>
                     <li>Embed</li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   )
}

export default GifInfo
