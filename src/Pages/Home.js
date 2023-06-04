import { useEffect, useState } from 'react'
import GifsList from '../Components/GifsList'
import Searchbar from '../Components/SearchBar'
import Subtitle from '../Components/Subtitle'
import TrendingList from '../Components/TrendingList'
const apiKey = 'E3tz28FivKKk4RtmkZdHwppgGlDCLcgr'

const Home = () => {
   const [gifs, setGifs] = useState(null)
   useEffect(() => {
      fetch(
         `http://api.giphy.com/v1/gifs/categories?&api_key=${apiKey}&limit=23`
      )
         .then(res => res.json())
         .then(data => setGifs(data.data))
   }, [])

   return (
      <div>
         <Searchbar />
         <div className='flex flex-col'>
            <TrendingList />
            <Subtitle classes='mt-4'>Random gifs</Subtitle>
            <GifsList gifs={gifs} isSearching={false} />
         </div>
      </div>
   )
}

export default Home
