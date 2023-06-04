import { Route, Routes } from 'react-router-dom'
import Navigation from './Components/Navigation'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'
import Search from './Pages/Search'

const App = () => {
   return (
      <div className='app min-h-screen flex justify-center overflow-hidden'>
         <div className='w-10/12 pt-5'>
            <Navigation />
            <Routes>
               <Route path='/' element={<Home />} />
               <Route path='/search/:category' element={<Search />} />
               <Route path='*' element={<NotFound />} />
            </Routes>
         </div>
      </div>
   )
}

export default App
