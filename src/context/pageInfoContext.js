import { createContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const PageContext = createContext()

const PageInfoProvider = ({ children }) => {
   const location = useLocation().pathname

   const [keyword, setKeyword] = useState()
   const [offset, setOffset] = useState(0)
   const navigate = useNavigate()
   //resolver problema con &page=0
   const handleOffset = quantity => {
      if (quantity < 0) return
      console.log(quantity)

      if (quantity === 0) {
         navigate(`/search/${keyword}`)
         setOffset(0)
         return
      }

      console.log({ quantity, offset })

      setOffset(quantity)
      navigate(`${location.split('&')[0]}&page=${quantity}`)
   }

   const handleKeyword = key => setKeyword(key)

   useEffect(() => {
      setOffset(Number(location.split('=')[1]) || 0)
   }, [keyword, offset])

   const data = { handleOffset, keyword, offset, handleKeyword }

   return <PageContext.Provider value={data}>{children}</PageContext.Provider>
}

export default PageInfoProvider
export { PageContext }
