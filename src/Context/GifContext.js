import { createContext, useState } from 'react'

const GifContext = createContext()

const GifContextProvider = ({ children }) => {
   const [gifInfo, setGifInfo] = useState(null)

   const changeGif = data => setGifInfo(data)

   const value = {
      gifInfo,
      changeGif,
   }

   return <GifContext.Provider value={value}>{children}</GifContext.Provider>
}

export { GifContextProvider }

export default GifContext
