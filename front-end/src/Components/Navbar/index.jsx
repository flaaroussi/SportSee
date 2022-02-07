import { NavLink, Link } from 'react-router-dom'
import './Navbar.scss';
import { ReactComponent as NavbarLogo } from '../../assets/images/SportSeeLogo.svg'

/**
 * @description Component for showing Navbar navigation.
 *
 * @component
 * @example
 * 
 * return(<Navbar  />)
 */

function Navbar(){
   
   return (<header className="navbar">
            <Link to="/" className="navbar__logo" >
               <NavbarLogo  alt="logo Sport see" />
            </Link> 
           
            <nav className="navbar__nav">
               <NavLink className="navbar__nav__link" to='/' >Acceuil</NavLink>
               <NavLink className="navbar__nav__link" to='/profil' >Profil</NavLink>
               <NavLink className="navbar__nav__link" to='/reglage' >Réglage</NavLink>
               <NavLink className="navbar__nav__link" to='/communite' >Communité</NavLink>
            </nav>
            
         </header>
      );

}

export default  Navbar