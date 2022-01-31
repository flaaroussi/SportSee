import { useState, useEffect } from 'react'
const axios = require('axios')

const url = 'http://localhost:3000';

export const useApiUser = (userId, service) => {
      let endpoint = `${url}/user/${userId}`
      if(service){
         endpoint = endpoint + `/${service}`
      }

      console.log(endpoint)
      const [data , setData] = useState({});
      const [isDataLoading , setDataLoading] = useState(true);
      
      //const [isDataLoading, setDataLoading] = useState(false)

      useEffect(() => {
         setDataLoading(true);
          const fetchData = async() => {
            try {
               const response = await axios.get(endpoint);
               //console.log(response);

               setData(response.data.data);
               
             } catch (error) {
               console.error(error);
             }
             setDataLoading(false);
         }

         fetchData()

      }, [endpoint,userId, service])

 return {data, isDataLoading}

} 