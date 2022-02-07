import './style.scss'
import useFechData from '../../Hooks'
import { useParams } from 'react-router-dom';
import { ReactComponent as Oval } from '../../assets/images/Oval.svg'
import Loader from '../Loader';
import Error from '../../Pages/Error';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

/**
 * @ignore
 * @description function to format date : display the day
 * @param {*} date 
 */

const getDateDay = (date) => {
   const objetDate = new Date(date);
   return objetDate.getDate()
}

/**
 * @ignore
 * function to stylize the tooltip
 * @param {*} param0 
 * @returns 
 */
 function CustomTooltipActivity({active, payload}){
   console.log(payload)
   return (active && payload) ? (
      <ul className='custom-tooltip-activity'>
            <li className='custom-tooltip-activity__calories'>{`${payload[0].value} KCal`}</li>
            <li className='custom-tooltip-activity__poids'>{`${payload[1].value} Kg`}</li>
      </ul>
   ) : null;
}


 /**
 * @description Component for showing  DailyActivity chart.
 *
 * @component
 * @example
 *  <CardActivity  />
 */
function CardActivity (){
   const { userId } = useParams();
   // http://localhost:3000/user/12/activity
   // retrieve (récupèrer) our data
   const {data, isDataLoading, isError} = useFechData(userId, 'activity')
   
   if(isDataLoading){
      return <Loader/>
   }

   if (isError || !data){
      return <Error/>
   }
   //to avoid data undefined, check that data is defined before using it in the component

   if(data && isDataLoading === false){
      return <section className='card-activity'>

         <header className='card-activity__header'>
            <h3>Activité quotidienne</h3>
            <div className='card-activity__header__indicator'>
               <div className='card-activity__header__indicator__els'>
                  <Oval fill="#282D30"/>
                  <span>Poids (kg)</span>
               </div>
               <div className='card-activity__header__indicator__els'>
               <Oval fill="#E60000"/>
                  <span>Calories brûlées (kCal)</span>
               </div>
            </div>
         </header>
         
         <ResponsiveContainer width="100%" height="100%">
            <BarChart  data={data.sessions} barGap={8}>               
               <XAxis 
                  
                  dataKey="day" 
                  storke="grey" 
                  tickLine={false} 
                  dy={10}
                  tickFormatter={getDateDay}
                  />
               <YAxis 
                  yAxisId="kilogram"
                  dataKey="kilogram"
                  orientation="right"
                  domain={['dataMin - 2', 'dataMax + 1']}
                  dx={10}
                  dy={-2}                 
                  axisLine={false}
                  tickLine={false}
                  />
                  
                  <YAxis 
                  yAxisId="calories"
                  dataKey="calories"
                  orientation="left"
                  domain={['dataMin - 20', 'dataMax + 20']}
                  dx={-10}
                  dy={-2}
                  axisLine={false}
                  tickLine={false}
                  />
               <Tooltip 
                  wrapperStyle={{width:130}}
                  content={<CustomTooltipActivity />}
               />
               <CartesianGrid stroke="#CCC" vertical={false}/>
               <Bar yAxisId="kilogram" dataKey="kilogram" fill="#282D30" barSize={7} radius={[50,50,0,0]}/>
               <Bar yAxisId="calories" dataKey="calories" fill="#E60000" barSize={7} radius={[50,50,0,0]}/>
            </BarChart>
         </ResponsiveContainer>
         
      </section>

   }else{
      return (<Loader/>) 
   }

}

export default  CardActivity



