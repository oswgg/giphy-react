import { Route, Routes } from 'react-router-dom'
import Navigation from './Components/Navigation'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'
import Search from './Pages/Search'
import Gif from './Pages/GifPage'

const App = () => {
   return (
      <div className='app min-h-screen flex justify-center overflow-hidden'>
         <div className='w-[72%] md:max-w-[1050px] pt-5'>
            <Navigation />
            <Routes>
               <Route path='/' element={<Home />} />
               <Route path='/explore/:category' element={<Search />} />
               <Route path='/gif/:gif' element={<Gif />} />
               <Route path='*' element={<NotFound />} />
            </Routes>
         </div>
      </div>
   )
}

export default App
