import { useEffect, useState } from 'react'
import GifsList from '../Components/GifsList'
import Searchbar from '../Components/SearchBar'
import Subtitle from '../Components/Subtitle'
import TrendingList from '../Components/TrendingList'
import useGifs from '../Hooks/useGifs'
const apiKey = 'E3tz28FivKKk4RtmkZdHwppgGlDCLcgr'

const Home = () => {
   const { gifs, error, getCategories } = useGifs()
   useEffect(() => {
      getCategories()
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
