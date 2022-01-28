import { react } from 'react'
import './Dashboard.scss';
import {useApiUser} from '../../Api/Api'
import Profil from '../../Components/Profil';
import Activity from '../../Components/Activity';

/**
 * 
 * @returns 
 */

export default function Dashboard (){
   const {data} = useApiUser(12)
   
   //console.log(data.userInfos.firstName)
   return (<main className="main">
      <Profil firstName={data ? data.userInfos.firstName : ''} />
      <Activity />
      Dashboard
   </main>)
}