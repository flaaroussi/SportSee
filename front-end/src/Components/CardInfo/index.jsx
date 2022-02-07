import './style.scss'
import calorieIcon from '../../assets/images/energy.svg'
import proteineIcon from '../../assets/images/chicken.svg'
import cheeseburgerIcon from '../../assets/images/cheeseburger.svg'
import appleIcon from '../../assets/images/apple.svg'
import propTypes from "prop-types";

const icons = {
   calorie : calorieIcon,   
   chicken : proteineIcon,
   apple : appleIcon,
   cheesburger :cheeseburgerIcon,
}

/**
 * @description Component for showing user keys ionformation.
 *
 * @component
 * @example
 * const keyName = 'Calories'
 * keyValue = 120
 * const KeyUnite = 'kCal'
 * const icon = 'calorie'
  * return (
 *  <CardInfo  keyName={keyName} keyValue={keyValue} KeyUnite={KeyUnite} icon={icon} />
 * )
 */

function CardInfo ({keyName, keyValue, KeyUnite, icon}){
   return(<section className="card-info">
      <div className={"card-info__logo "+icon}>
         <img src={icons[icon]} alt="icone" />
      </div>
      <div className="card-info__detail">
         <span>{keyValue}{KeyUnite}</span>
         <div>{keyName}</div>
      </div>
   </section>)
}

//Validate the type of properties
CardInfo.propTypes ={
   /**
    * Key info name's
    */
   keyName: propTypes.string,
   /**
    * Key info value
    */
   keyValue: propTypes.number,
   /**
    * Key info unite
    */
   KeyUnite: propTypes.string,
   /**
    * Key icon
    */
   icon : propTypes.string
 }

 export default  CardInfo 