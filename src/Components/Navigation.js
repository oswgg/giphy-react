import { NavLink } from 'react-router-dom'
import logo from '../assets/images/giphy.png'
import NavItem from './NavItem'

const Navigation = () => {
   return (
      <div className='flex justify-between items-stretch text-white py-2'>
         <NavLink className='w-1/6' to='/'>
            <div>
               <img src={logo} />
            </div>
         </NavLink>
         <div className='flex gap-6 items-center grow ml-5'>
            <NavItem whereTo='Football' />
            <NavItem whereTo='Rocket' />
            <NavItem whereTo='Minecraft' />
            <NavItem whereTo='Tetris' />
            <NavItem whereTo='Development' />
         </div>
         <div className='bg-gray-700 flex items-center  w-2/12 rounded-sm'>
            <div className='px-4'>i</div>
            <div className='bg-gray-900 grow text-center h-full flex items-center justify-center'>
               <p>Log in</p>
            </div>
         </div>
      </div>
   )
}

export default Navigation
