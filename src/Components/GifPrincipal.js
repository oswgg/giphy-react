import React from 'react'
import Subtitle from './Subtitle'

const GifPrincipal = ({ data }) => {
   return (
      <div>
         <Subtitle className='text-sm text-[#a6a6a6] '>{data.title}</Subtitle>
         <div className='flex flex-row gap-8 mt-2'>
            <div className=' max-w-8/12'>
               <img src={data.images.downsized_large.url} className='w-full' />
            </div>
            <div className='max-w-[243px]'>
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
   )
}

export default GifPrincipal
