import { Route, Routes } from 'react-router-dom'
import Navigation from './Components/Navigation'
import PageInfoProvider from './context/pageInfoContext'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'
import Search from './Pages/Search'

const App = () => {
   return (
      <PageInfoProvider>
         <div className='app min-h-screen flex justify-center overflow-hidden'>
            <div className='w-10/12 pt-5'>
               <Navigation />
               <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/search/:keyword' element={<Search />} />
                  <Route path='*' element={<NotFound />} />
               </Routes>
            </div>
         </div>
      </PageInfoProvider>
   )
}

export default App
