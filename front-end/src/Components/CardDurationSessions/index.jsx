import './style.scss'

import {useApiUser} from '../../Api/Api'
import { useParams } from 'react-router-dom';
import Loader from '../Loader';
import Error from '../../Pages/Error';
import { LineChart, Line,  ResponsiveContainer,  } from 'recharts';

/**
 * 
 * @returns 
 */

export default function CardDuration(){

const { userId } = useParams();
  
const {data, isDataLoading} = useApiUser(userId, 'average-sessions')
   console.log(data.sessions)
   
   if(isDataLoading){
      
      return <Loader/>
   }
   if (!data){
      return <Error/>
   }

   if(data && isDataLoading === false){
      return <section className='card-durationSessions'>

         <header className='card-durationSessions__header'>
            <h1>Durée moyenne des sessions</h1>
         </header>

         <ResponsiveContainer width="100%" height="100%">
            <LineChart width={300} height={100} data={data.sessions}>
               <Line type="monotone" dataKey="sessionLength" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
         </ResponsiveContainer>
            
      </section>

   }else{
      return (<Loader/>) 
   }

}
