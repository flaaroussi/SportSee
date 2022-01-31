import './style.scss';
import {useApiUser} from '../../Api/Api'
import Profil from '../../Components/Profil';
import Loader from '../../Components/Loader';
import Error from '../Error';
import CardActivity from '../../Components/CardActivity';
import CardDuration from '../../Components/CardDurationSessions'
import CardPerformance from '../../Components/CartPerformance';
import CardInfo from '../../Components/CardInfo';

import { useParams } from 'react-router-dom';
import CardScore from '../../Components/CardScore';


/**
 * 
 * @returns 
 */

export default function Dashboard (){
   ////////////
   const { userId } = useParams();
   const {data, isDataLoading} = useApiUser(userId)

   if(isDataLoading){
      // show componant loader indictor
      return <Loader/>
   }

   if (!data){
      return <Error/>
   }

   if(data && isDataLoading === false){
      //console.log(data.userInfos.firstName)
      return (<main className="main dashboard">
         <Profil firstName={data.userInfos.firstName} />
         <section className="dashboard__cards">
            <CardActivity />
            <CardScore score={data.score}/>
            <CardPerformance />
            <CardDuration />
            <section className='CardInfos'>
            <CardInfo />
            <CardInfo />
            <CardInfo />
            <CardInfo />
            </section>
         </section>
      </main>)

   }else{
      return (<Loader/>)
   }
}