import './style.scss';
import { ReactComponent as YogaIcon } from '../../assets/images/YogaIcon.svg'
import { ReactComponent as SwimIcon } from '../../assets/images/SwimIcon.svg'
import { ReactComponent as BodyBuildIcon } from '../../assets/images/BodyBuildIcon.svg'
import { ReactComponent as BycIcon } from '../../assets/images/BycIcon.svg'
import { NavLink } from "react-router-dom";

/**
 * @description Component for showing side bar navigation.
 *
 * @component
 * @example
 * return(
 *  <Sidebar  />
 * )
 */

function Sidebar (){
   return(<aside className="sidebar">

      <nav>
         <NavLink to = "/yoga" className="sidebar__logo">
            <YogaIcon   alt="logo yoga" />
         </NavLink>
         <NavLink to = "/swimming" className="sidebar__logo">
            <SwimIcon   alt="logo swimming" />
         </NavLink>
         
         <NavLink to = "/biking" className="sidebar__logo">
            <BycIcon   alt="logo biking" />
         </NavLink>

         <NavLink to = "/bodyBuilding" className="sidebar__logo">
            <BodyBuildIcon   alt="logo body build" />
         </NavLink>   
         
      </nav>

      <footer className="sidebar__text">
         Copiryght, SportSee 2020
      </footer>

   </aside>)
}

export default Sidebar