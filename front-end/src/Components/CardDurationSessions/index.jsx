import './style.scss'
import useFechData from '../../Hooks'
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
 * @ignore
 * get day
 * @param {Number} indexKind 
 * @return day 
 */
const getDay = (indexDay) => {
   return   days[indexDay];
}

/**
 * Custom tooltip chart
 * @ignore
 */
 function CustomTooltip({active, payload}){
  return active && payload ? (
     <div className="custom-tooltip-average-sessions">            
           {`${payload[0].value} min`}
     </div>
  ) : null;
}



/**
 * @description Component for display average session duration as Line chart
 *
 * @component
 * @example
 *
 * return (
 *  <CardDuration />
 * )
 */

function CardDuration(){

const { userId } = useParams();
  
const {data, isDataLoading, isError} = useFechData(userId, 'average-sessions')
   
   if(isDataLoading){
      return <Loader/>
   }

   if (isError || !data){
      return <Error/>
   }
  

   if(data && isDataLoading === false){
      const color = 'rgba(255,255,255,09)';
      return <section className='card-durationSessions'>

         <header className='card-durationSessions__header'>
            <h1>Durée moyenne des sessions</h1>
         </header>

         <ResponsiveContainer width="100%" height="100%">
            <LineChart width={300} height={300} data={data.sessions} margin={{top:0, right:10,left:10,bottom:40}}>
               <XAxis 
                  dataKey="day"
                  stroke={color}
                  tickLine={false}
                  dy={2}
                  tickFormatter={getDay}
               />
                <YAxis 
                  dataKey="sessionLength"
                  stroke={color}
                  hide={true}
                  domain={[0, 'dataMax + 75']}
                  dy={10}
               />
               <Tooltip
                  cursor={{
                     stroke : 'rgba(255,255,255,07)'
                  }}
                  content={<CustomTooltip/>}
               />
               
               <Line 
                  type="monotone" 
                  dataKey="sessionLength" 
                  stroke={color} 
                  strokeWidth={2} 
                  dot={false}
                  activeDot={{
                     stroke:'rgba(255,255,255,07)',
                     r : 6
                  }}
               />
            </LineChart>
         </ResponsiveContainer>
            
      </section>

   }else{
      return (<Loader/>) 
   }

}
export default CardDuration