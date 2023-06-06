import { Route, Routes } from 'react-router-dom'
import Navigation from './Components/Navigation'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'
import Search from './Pages/Search'
import { GifContextProvider } from './Context/GifContext'
import Gif from './Pages/Gif'

const App = () => {
   return (
      <div className='app min-h-screen flex justify-center overflow-hidden'>
         <div className='w-[70%] pt-5'>
            <Navigation />
            <GifContextProvider>
               <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/search/:category' element={<Search />} />
                  <Route path='/gif/:gif' element={<Gif />} />
                  <Route path='*' element={<NotFound />} />
               </Routes>
            </GifContextProvider>
         </div>
      </div>
   )
}

export default App
