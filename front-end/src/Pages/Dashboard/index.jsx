import './style.scss';
import {useApiUser} from '../../Api/Api'
import Profil from '../../Components/Profil';

import Loader from '../../Components/Loader';
import Error from '../Error';
import CardActivity from '../../Components/CardActivity';
import LigneChart from '../../Components/LigneChart';
import CardInfos from '../../Components/CardInfos';
import RadialBarchart from '../../Components/RadialBarchart';
import RadarChart from '../../Components/RadarChart';
import { useParams } from 'react-router-dom';

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
         <RadialBarchart />
         <LigneChart />
         <RadarChart />
         <CardInfos />
      </section>

      </main>)
   }else{
      return (<Loader/>)
   }

  
}