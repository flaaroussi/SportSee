import './style.scss'
import {useApiUser} from '../../Api/Api'
import { useParams } from 'react-router-dom';
import { ReactComponent as Oval } from '../../assets/images/Oval.svg'
import Loader from '../Loader';
import Error from '../../Pages/Error';
import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


/**
 * 
 * @returns 
 */

export default function CardActivity (){
   const { userId } = useParams();
   // http://localhost:3000/user/12/activity
   const {data, isDataLoading} = useApiUser(userId, 'activity')
   console.log(data)
   if(isDataLoading){
      // show componant loader indictor
      return <Loader/>
   }
   if (!data){
      return <Error/>
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
            <BarChart width={500} height={300} data={data.sessions} margin={{ top: 5, right: 30, left: 20, bottom: 5, }}>
               <CartesianGrid strokeDasharray="3 3" />
               <XAxis dataKey="day" />
               <YAxis dataKey="kilogram"/>
               <Tooltip />
               <Legend />
               <Bar dataKey="kilogram" fill="#282D30" barSize={7} />
               <Bar dataKey="calories" fill="#E60000" barSize={7} />
            </BarChart>
         </ResponsiveContainer>
         
      </section>

   }else{
      return (<Loader/>) 
   }

}