import GifsList from '../Components/GifsList'
import Searchbar from '../Components/SearchBar'
import Subtitle from '../Components/Subtitle'
import TrendingList from '../Components/TrendingList'

const Home = () => {
  return (
    <div>
      <Searchbar />
      <div className='flex flex-col'>
        <TrendingList />
        <Subtitle classes='mt-4'>Random gifs</Subtitle>
        <GifsList />
      </div>
    </div>
  )
}

export default Home
