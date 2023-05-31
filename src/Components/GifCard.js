import { NavLink } from 'react-router-dom'

const GifCard = ({ data, isSearching, index }) => {
   const GIF_DATA = {
      IMAGE_SRC: isSearching
         ? data.images.downsized_medium.url
         : data.gif.images.downsized_medium.url,

      URL_TO: isSearching
         ? data.title.replaceAll(' ', '-')
         : data.gif.title.replaceAll(' ', '-'),

      TITLE: isSearching
         ? data.title.charAt(0).toUpperCase() + data.title.slice(1)
         : data.gif.title.charAt(0).toUpperCase() + data.gif.title.slice(1),

      DATE: isSearching
         ? data.trending_datetime.split(' ')[0]
         : data.gif.trending_datetime.split(' ')[0],
   }

   const imageSrc = isSearching
      ? data.images.downsized_medium.url
      : data.gif.images.downsized_medium.url

   const colorBg = index % 3 === 0 ? 'from-green-500' : 'from-blue-500'
   const isGrow = index % 4 === 0 ? 'grow' : 'max-w-[20%]'

   return (
      <NavLink
         to={GIF_DATA.URL_TO}
         className={`group/shadow h-[15em] rounded-md overflow-hidden ${isGrow} relative ${colorBg} grid-item cursor-pointer`}>
         <div className='absolute bottom-0 text-white w-full h-1/2 group-hover/shadow:bg-gradient-to-t z-10'>
            <div className='absolute bottom-0 p-4'>
               <p className='font-bold'>{GIF_DATA.TITLE}</p>
               <p className='font-medium text-gray-400'>{GIF_DATA.DATE}</p>
            </div>
         </div>
         <img
            src={imageSrc}
            className='hover:scale-110 h-full w-full object-cover object-center transition-all ease-in'
         />
      </NavLink>
   )
}

export default GifCard
