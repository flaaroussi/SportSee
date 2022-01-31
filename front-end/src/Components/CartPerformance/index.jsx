import './style.scss'
import {useApiUser} from '../../Api/Api'
import { useParams } from 'react-router-dom';
import Loader from '../Loader';
import Error from '../../Pages/Error';
import React, { PureComponent } from 'react';
import { RadarChart, PolarGrid,PolarRadiusAxis, PolarAngleAxis,Radar, ResponsiveContainer,  } from 'recharts';


export default function CardPerformance (){

   const { userId } = useParams();
  
   const {data, isDataLoading} = useApiUser(userId, 'performance')
      console.log(data)
      
      if(isDataLoading){
         
         return <Loader/>
      }
      if (!data){
         return <Error/>
      }
//Simple radar chart
   return(<section className='card-performance'>
      
       <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data.kind}>
          <PolarGrid />
          <PolarAngleAxis dataKey="kind" />
          <PolarRadiusAxis />
          <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>

   </section>)
}