
import { useNavigate } from "react-router-dom";

import underImage from '../../assets/images/under.png'
import './style.scss';


/**
 * Render InProgress page constrution
 * @component
 * @param {objet} props 
 * @returns 
 */
export default function InProgress({page}){
   // Hock navigate
   const  navigate = useNavigate();
   // Redirect user to dashboard page with 10s
   setTimeout(
      () => {
         navigate(`/`);
      }, 1000
   )

   return(<aricle className="under">
     <img src={underImage} alt="" className="underImage"/>
     <div>
         Page {page} bientôt disponible
     </div>
   </aricle>)
}