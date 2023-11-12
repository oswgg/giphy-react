import { useNavigate } from 'react-router-dom'

const TrendingCard = ({ el }) => {
   const navigate = useNavigate()

   const handleRedirect = () => {
      navigate(`/gif/${el.title.replaceAll(' ', '-')}-${el.id}`)
   }

   return (
      <div className='group/trend-card relative min-w-fit'>
         {el.user && (
            <div className='absolute bottom-2 left-2'>
               <img
                  src={el.user.avatar_url}
                  className='opacity-0 group-hover/trend-card:opacity-100 h-7 shadow-xl transition-opacity duration-100'
               />
            </div>
         )}
         <img
            onClick={handleRedirect}
            src={el.images.downsized_medium.url}
            className='h-32 rounded-md object-cover cursor-pointer'
         />
      </div>
   )
}
export default TrendingCard
