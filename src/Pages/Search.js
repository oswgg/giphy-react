import { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import GifsList from '../Components/GifsList'
import Searchbar from '../Components/SearchBar'
import useGifs from '../Hooks/useGifs'

const Search = () => {
   const { gifs, error, getFromSearch } = useGifs()
   const { category } = useParams()
   const { search } = useLocation()
   const query = new URLSearchParams(search)
   const page = query.get('page')

   useEffect(() => {
      const searchOptions = {
         limit: 23,
         page,
         search: category,
      }
      getFromSearch(searchOptions)
   }, [category])

   return (
      <>
         <Searchbar />
         {gifs && <GifsList gifs={gifs} isSearching={true} />}
      </>
   )
}

export default Search
