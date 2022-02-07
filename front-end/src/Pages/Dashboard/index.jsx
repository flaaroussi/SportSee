import './style.scss';
import useFechData from '../../Hooks'
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
 * @description Component for showing dashboard page.
 * 
 * @component
 * @example
 * 
 *  return(<Dashboard />)
 * 
 */

function Dashboard (){
   //retrieve the id pass in the route by using useParams
   const { userId } = useParams();
   // get data user
   const {data, isDataLoading, isError} = useFechData(userId)

   // show componant loader indictor
   if(isDataLoading){
      return <Loader/>
   }
   //
   if (isError || !data){
      return <Error/>
   }
   
   if(data){
      
      return (<main className="main dashboard">
         
         <Profil firstName={data.userInfos.firstName} />

         <article className="dashboard__cards">
            <CardActivity />
            <CardScore score={data.score}/>
            <CardPerformance />
            <CardDuration />

            <div className='CardInfos'>
               <CardInfo keyName="Calories" keyValue={data.keyData.calorieCount} KeyUnite="kCal" icon="calorie"/>
               <CardInfo keyName="Protèines" keyValue={data.keyData.proteinCount} KeyUnite="g" icon="chicken"/>
               <CardInfo keyName="Glucides" keyValue={data.keyData.carbohydrateCount} KeyUnite="g" icon="apple"/>
               <CardInfo keyName="Lipides" keyValue={data.keyData.lipidCount} KeyUnite="g" icon="cheesburger"/>
            </div>

         </article>

      </main>)

   }else{
      return (<Loader/>)
   }

}

export default Dashboard