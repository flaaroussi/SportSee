import './style.scss'

import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';


export default function CardScore({score}){
   const data = [
      { name: 'end', value: score, fillColor:'#FF0101' },
      { name: 'start', value: 1 - score, fillColor:'#ffffff'},
      
    ];

   return (<article className='card-score'>
         <header className='card-score__header'>
               <h1>Score {score}</h1>
         </header>
         <div className='card-score__chart'>
            <ResponsiveContainer width="100%" height="100%">
               <PieChart width={160} height={100} >
                  <Pie
                     data={data}
                     dataKey="value"         
                     innerRadius={70}
                     outerRadius={80}
                     tartAngle={90}
                     endAngle={450}
                     fill='transparent'
                     stroke = 'transparent'

                  >
                     {data.map((currentValue, index) => (
                        <Cell key={`cell-${index}`} fill={currentValue.fillColor} cornerRadius="50"/>
                     ))}
                  </Pie>   
            </PieChart>
         </ResponsiveContainer>
         <div className='card-score__chart__legend'>
            legend text
         </div>
      </div>
      </article>)
   
}