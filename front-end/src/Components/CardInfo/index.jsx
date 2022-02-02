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
 * display card key infos
 * @param {*} param0 
 * @returns 
 */
export default function CardInfo ({keyName, keyValue, KeyUnite, icon}){
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




//Valider le type des propriétés
CardInfo.propTypes ={
   keyName: propTypes.string,
   keyValue: propTypes.number,
   KeyUnite: propTypes.string,
   icon : propTypes.object
 }