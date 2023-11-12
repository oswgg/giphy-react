import React from 'react'
import { Link } from 'react-router-dom'

const HashTagItem = ({ tag }) => {
   return (
      <Link
         to={`/explore/${tag}`}
         className='bg-[rgba(46,46,46)] px-4 py-2 rounded-full light text-sm hover:text-[rgba(0,230,204)]'>
         <p>#{tag}</p>
      </Link>
   )
}

export default HashTagItem
