import './style.scss'
import {useApiUser} from '../../Api/Api'
import { useParams } from 'react-router-dom';
import Loader from '../Loader';
import Error from '../../Pages/Error';
import React, { PureComponent } from 'react';
import { RadarChart, PolarGrid,PolarRadiusAxis, PolarAngleAxis,Radar, ResponsiveContainer,  } from 'recharts';

/**
 * display activity types as radar chart
 * @returns 
 */

export default function CardPerformance (){

   const { userId } = useParams();
  
   const {data, isDataLoading} = useApiUser(userId, 'performance')
   console.log(data.data)
           
      if(isDataLoading){
         return <Loader/>
      }

      if (!data){
         return <Error/>
      }

      /**
       * get the performance type
       * @param {*} kindsPerformance 
       * @returns 
       */

      const  kindsPerformance= {
         cardio: 'Cardio',
         energy: 'Energie',
         endurance: 'Endurance',
         strength: 'Force',
         speed: 'Vitesse',
         intensity: 'Intensité'
      }

      const getKindText = (indexKind) => {
         
         const kind =  data.kind[indexKind];
                
         return kindsPerformance[kind]
      }


//Simple radar chart
   return(<section className='card-performance'>
      
       <ResponsiveContainer width="100%" height="100%" className="">
        <RadarChart outerRadius="90" data={data.data}>
          <PolarGrid radialLines={false}/>
          <PolarAngleAxis 
          dataKey="kind" 
          domain={[0, 250]}
          dy={5}
          tickLine={false}
          stroke='#FFFFFF'
          tickFormatter={getKindText}
          tick={{
            fontSize: 12,
            fontWeight:500
          }
          }
          />
          <PolarRadiusAxis domain={[0, 300]} tick={false} axisLine={false} tickCount={6}/>
          <Radar name="" dataKey="value"  fill="#E60000" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>

   </section>)
}