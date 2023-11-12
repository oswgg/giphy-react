import GifCard from './GifCard'

const GifsList = ({ gifs, isSearching }) => {
   return (
      <div className='mt-2 mb-8 columns-4 gap-2'>
         {gifs &&
            gifs.map((el, i) => (
               <GifCard data={el} key={i} isSearching={isSearching} index={i} />
            ))}
      </div>
   )
}

export default GifsList
