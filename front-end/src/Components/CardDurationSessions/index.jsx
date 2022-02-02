import './style.scss'
import {useApiUser} from '../../Api/Api'
import { useParams } from 'react-router-dom';
import Loader from '../Loader';
import Error from '../../Pages/Error';
import { LineChart, Line,  ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

 

  const  days = {
   1: 'L',
   2: 'M',
   3: 'M',
   4: 'J',
   5: 'V',
   6: 'S',
   7: 'D'
}

/**
    * get day
    * @param {*} indexKind 
    * @returns 
    */
   
 const getDay = (indexDay) => {
   return   days[indexDay];
}

/**
 * display average session duration as Line chart
 * @returns 
 */

export default function CardDuration(){

const { userId } = useParams();
  
const {data, isDataLoading} = useApiUser(userId, 'average-sessions')
   
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
            <LineChart width={300} height={300} data={data.sessions} margin={{top:0, right:10,left:10,bottom:40}}>
               <XAxis 
                  dataKey="day"
                  stroke=''
                  tickLine={false}
                  dy={2}
                  tickFormatter={getDay}
               />
                <YAxis 
                  dataKey="sessionLength"
                  stroke=''
                  hide={true}
                  domain={[0, 'dataMax + 75']}
                  dy={10}
               />
               <Tooltip

               />
               
               <Line 
                  type="monotone" 
                  dataKey="sessionLength" 
                  stroke="#ffffff" 
                  strokeWidth={2} 
                  dot={false}
                  activeDot={{
                     stroke:'#FFFFFF',
                     r : 5
                  }}
               />
            </LineChart>
         </ResponsiveContainer>
            
      </section>

   }else{
      return (<Loader/>) 
   }

}
