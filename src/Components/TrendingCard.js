import React from 'react'
import { useNavigate } from 'react-router-dom'

const TrendingCard = ({ el }) => {
   const navigate = useNavigate()

   const handleRedirect = () => {
      console.log(el)
      navigate('/gif/' + el.title.replaceAll(' ', '-'))
   }

   return (
      <img
         onClick={handleRedirect}
         src={el.images.downsized_medium.url}
         className='h-32 rounded-md object-cover cursor-pointer'
      />
   )
}
export default TrendingCard
