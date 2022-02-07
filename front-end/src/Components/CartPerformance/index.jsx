import './style.scss'
import useFechData from '../../Hooks'
import { useParams } from 'react-router-dom';
import Loader from '../Loader';
import Error from '../../Pages/Error';
import { RadarChart, PolarGrid,PolarRadiusAxis, PolarAngleAxis,Radar, ResponsiveContainer,  } from 'recharts';

/**
 * @description component for  displaying activity types as radar chart
 * 
 * @component
 * @example
 * 
 * return(<CardPerformance  />)
 */
function CardPerformance (){

   const { userId } = useParams();
  
   const {data, isDataLoading, isError} = useFechData(userId, 'performance')
           
      if(isDataLoading){
         return <Loader/>
      }

      if (isError || !data){
         return <Error/>
      }

      /**
       * get the performance type
       * @param {*} kindsPerformance 
       * @returns 
       */

      const  kindsPerformance = {
         intensity: 'Intensité',
         speed: 'Vitesse',
         strength: 'Force',
         endurance: 'Endurance',
         energy: 'Energie',
         cardio: 'Cardio'
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

export default CardPerformance