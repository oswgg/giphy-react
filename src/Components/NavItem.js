import { NavLink } from 'react-router-dom'

const NavItem = ({ whereTo }) => {
   return (
      <NavLink to={`/explore/${whereTo.toLowerCase()}`}>
         <div>
            <p>{whereTo}</p>
         </div>
      </NavLink>
   )
}

export default NavItem
