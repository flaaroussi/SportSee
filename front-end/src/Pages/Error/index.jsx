import { Link } from "react-router-dom";
import "./style.scss"

 /**
 * @description Component for showing  error message.
 *
 * @component
 * @example
 *  <Error  />
 */

function Error (){

   return (<section className="page-error">
     <p className="page-error__404">404</p>
         <p className="page-error__msg">Oups! La page que vous demandez n'existe pas.</p>
         <Link className="page-error__lien active" to ="/">Retourner sur la page d'acceuil</Link>
     
   </section>)
}

export default  Error 

