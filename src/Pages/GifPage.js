import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import useGifs from '../Hooks/useGifs'
import { SEARCH_TYPES } from '../helpers/types'
import Searchbar from '../Components/SearchBar'
import GifPrincipal from '../Components/GifPrincipal'
import HashTagsList from '../Components/HashTagsList'
import NotFound from './NotFound'
import RelatedContent from '../Components/RelatedContent'

const Gif = () => {
   const { pathname } = useLocation()
   const { gifs, getFromSearch, error } = useGifs()
   useEffect(() => {
      const gifID = pathname.split('-').at(-1)

      getFromSearch({
         type: SEARCH_TYPES.UNIQUE,
         search: gifID,
      }).then(res => console.log(res))
   }, [pathname])

   return (
      <div>
         <Searchbar />
         <div className='mt-10'>
            {gifs && !error ? (
               <div className='flex w-full md:max-w-[1050px]'>
                  <div className='min-w-[228px] max-w-[39%] border-red-100 pr-6'>
                     <div className='w-full h-full border-2 border-red-100 text-white'>
                        {gifs.user && (
                           <div>
                              <div className='px-1'>
                                 <div className='flex items-center'>
                                    <img
                                       className='w-14'
                                       src={gifs.user.avatar_url}
                                    />
                                    <div>
                                       <p className='text-sm'>
                                          {gifs.user.display_name}
                                       </p>
                                       <p className='text-xs text-gray-400'>
                                          @{gifs.user.username}
                                       </p>
                                    </div>
                                 </div>
                                 <div>
                                    <p className='light text-xs text-gray-400 mt-6'>
                                       {gifs.user.description}
                                    </p>
                                    <p className='mt-8 text-gray-400'>
                                       Follow on:{' '}
                                    </p>
                                    <div>
                                       <a
                                          href={gifs.user.instagram_url}
                                          target='_blank'
                                          rel='noreferrer'>
                                          IG
                                       </a>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        )}
                     </div>
                  </div>
                  <div className='max-w-[778px] grow'>
                     <GifPrincipal data={gifs} />
                     <HashTagsList />
                     <RelatedContent />
                  </div>
               </div>
            ) : (
               <NotFound />
            )}
         </div>
      </div>
   )
}

export default Gif
