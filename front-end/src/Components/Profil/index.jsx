import { react } from 'react'
import './style.scss'
import {useApiUser} from '../../Api/Api'

export default function Profil ({firstName}){
  
   const {data} = useApiUser(12)
   return(<header>
         <h2 className='header__name'>Bonjour <span>{firstName}</span></h2>
         <p className="header__paragraphe">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>

   </header>)
}