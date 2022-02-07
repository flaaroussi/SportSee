import './style.scss'
import propTypes from "prop-types";

/**
 * @description Component for showing user first name and message.
 * 
 * @component
 * @example
 * 
 * const firstName ='Thomas'
 * 
 *  return(<Profil firstName={firstName} />)
 */

 function Profil ({firstName}){  
   return(<header>
         <h2 className='header__name'>Bonjour <span>{firstName}</span></h2>
         <p className="header__paragraphe">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
   </header>)
}

// Validate the type of properties
Profil.propTypes ={
      /**
       * user  first name
       */
      firstName: propTypes.string
}
Profil.defaultProps = {
      firstName: null,    
}

export default Profil