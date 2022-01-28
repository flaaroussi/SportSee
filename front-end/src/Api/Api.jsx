import { useState, useEffect } from 'react'
const axios = require('axios')

const url = 'http://localhost:3000';

export const useApiUser = (userId, service) => {

      const endpoint = `${url}/user/${userId}`
      const [data , setData] = useState({});

      useEffect(() => {
          const fetchData = async() => {
            try {
               const response = await axios.get(endpoint);
               //console.log(response);

               setData(response.data.data);
               
             } catch (error) {
               console.error(error);
             }
         }

         fetchData()

      }, [])

 return {data}

} 