import { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import GifsList from '../Components/GifsList'
import Searchbar from '../Components/SearchBar'

const apiKey = 'E3tz28FivKKk4RtmkZdHwppgGlDCLcgr'

const Search = () => {
   const [gifs, setGifs] = useState(null)
   const { category } = useParams()
   const { search } = useLocation()
   const query = new URLSearchParams(search)
   const page = query.get('page')
   const limit = 23

   useEffect(() => {
      setGifs(null)
      fetch(
         `http://api.giphy.com/v1/gifs/search?&api_key=${apiKey}&limit=${limit}&offset=${
            page * limit
         }&q=${category}}`
      )
         .then(res => res.json())
         .then(data => setGifs(data.data))
   }, [category])

   return (
      <>
         <Searchbar />
         {gifs && <GifsList gifs={gifs} isSearching={true} />}
      </>
   )
}

export default Search
