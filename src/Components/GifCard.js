import { Link } from 'react-router-dom'

const GifCard = ({ data, isSearching }) => {
   // get gif info if searching from data.gif... else from data...
   const infoPath = isSearching ? data : data.gif

   const GIF_DATA = {
      IMAGE_SRC: infoPath.images.downsized_medium.url,
      URL_TO: infoPath.slug,
      TITLE: infoPath.title.split('GIF')[0],
      DATE: infoPath.import_datetime.split(' ')[0],
   }

   return (
      <Link
         to={`/gif/${GIF_DATA.URL_TO}`}
         className={'group/info overflow-hidden relative from-gray-900'}>
         <div className='overflow-hidden h-full mb-2 '>
            <div className='absolute bottom-0 text-white w-full h-1/2 group-hover/info:bg-gradient-to-t z-10'>
               <div className='absolute bottom-0 p-4'>
                  <p className='font-bold capitalize opacity-0 group-hover/info:opacity-100'>
                     {GIF_DATA.TITLE}
                  </p>
               </div>
            </div>
            <img
               src={GIF_DATA.IMAGE_SRC}
               className=' hover:scale-110 object-cover object-fit transition-all ease-in'
            />
         </div>
      </Link>
   )
}

export default GifCard
