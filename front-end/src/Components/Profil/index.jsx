import { react } from 'react'
import './style.scss'
import {useApiUser} from '../../Api/Api'

export default function Profil ({firstName}){
  
   const {data} = useApiUser(12)
   console.log(data)
   return(<header>
         <h1 className='header__name'>Bonjour <span>{firstName}</span></h1>

   </header>)
}