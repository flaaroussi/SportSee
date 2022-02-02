import './style.scss'
import {useApiUser} from '../../Api/Api'
import { useParams } from 'react-router-dom';
import { ReactComponent as Oval } from '../../assets/images/Oval.svg'
import Loader from '../Loader';
import Error from '../../Pages/Error';
import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


/**
 * 
 * @returns 
 */

export default function CardActivity (){
   const { userId } = useParams();
   // http://localhost:3000/user/12/activity
   const {data, isDataLoading} = useApiUser(userId, 'activity')
   

   if(isDataLoading){
      return <Loader/>
   }

   if (!data){
      return <Error/>
   }

   /**
    * 
    * @param {*} date 
    */
    const getDateDay = (date) => {
      const objetDate = new Date(date);
      console.log(date)
      console.log(objetDate.getDate())
      return objetDate.getDate()
   }
  



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
            <BarChart width={500} height={300} data={data.sessions} barGap={8}>
               <CartesianGrid stroke="#CCC" vertical={false}/>
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
                  <Tooltip />
                  <YAxis 
                  yAxisId="calories"
                  dataKey="calories"
                  orientation="left"
                  domain={['dataMin - 20', 'dataMax + 20']}
                  dx={10}
                  dy={-2}
                  axisLine={false}
                  tickLine={false}
                  />
               <Tooltip />
               <Bar yAxisId="kilogram" dataKey="kilogram" fill="#282D30" barSize={7} radius={[50,50,0,0]}/>
               <Bar yAxisId="calories" dataKey="calories" fill="#E60000" barSize={7} radius={[50,50,0,0]}/>
            </BarChart>
         </ResponsiveContainer>
         
      </section>

   }else{
      return (<Loader/>) 
   }

}