import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import GifsList from '../Components/GifsList'
import Searchbar from '../Components/SearchBar'
import Subtitle from '../Components/Subtitle'
import { PageContext } from '../context/pageInfoContext'

const Search = () => {
   const { handleKeyword, handleOffset, offset } = useContext(PageContext)
   const { keyword } = useParams()
   const [endpoint, setEndpoint] = useState('')
   const [counter, setCounter] = useState(0)

   const pageTitle = keyword.split('&')[0]
   useEffect(() => {
      const key = keyword.split('&')[0]

      setEndpoint(keyword)
      handleKeyword(key)
   }, [keyword])

   const handleCounter = quantity => setCounter(quantity)

   return (
      <div>
         <Searchbar />
         <div className='flex items-end my-4'>
            <Subtitle classes='first-letter:capitalize nexa-font text-3xl'>
               {pageTitle}
            </Subtitle>
            <Subtitle classes='text-sm text-gray-400 mx-2'>
               {new Intl.NumberFormat().format(counter)} GIFs
            </Subtitle>
         </div>
         {endpoint ? (
            <GifsList
               endpoint='search'
               query={endpoint}
               offset={offset}
               handleCounter={handleCounter}
            />
         ) : (
            <h1>Ocurrio un error</h1>
         )}
         <div>
            <button
               onClick={() => handleOffset(offset + 1)}
               className='p-2 bg-slate-300'>
               {'>1'}
            </button>
            <button
               onClick={() => handleOffset(offset - 1)}
               className='p-2 bg-slate-300'>
               {'<1'}
            </button>
         </div>
      </div>
   )
}

export default Search
