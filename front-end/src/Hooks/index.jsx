import { useState, useEffect } from 'react'

const axios = require('axios')

const url = 'http://localhost:3000';


/**
 * Custom hook for get data from an API.we use axios to connect
 * with the backend API.
 * 
 * @category API
 * @see https://github.com/axios/axios
 * 
 * @example <caption>Using the Hook useFechData for get user info, score, keys infos, </caption>
 * const {data, isDataLoading, isError} =  useFechData(12) 
 * 
 * @example <caption>Using the Hook useFechData for get user activity</caption>
 * const {data, isDataLoading, isError} =  useFechData(12, 'activity')
 * 
 * @example <caption>Using the Hook useFechData for get user average sessions</caption>
 * const {data, isDataLoading, isError} =  useFechData(12, 'average-sessions')
 
* @example <caption>Using the Hook useFechData for get user performance</caption>
 * const {data, isDataLoading, isError} =  useFechData(12, 'performance')
 * 
 * @param {Number} userId - User Id
 * @param {String} service - Service to call
 * @returns {Object}  {data, isDataLoading, isError}
 */

const useFechData = (userId, service) => {

      let endpoint = `${url}/user/${userId}`

      // endpoint of the other services
      if(service){
         endpoint = endpoint + `/${service}`
      }

      //declare the data and the function that modifies it
      const [data , setData] = useState(null);

      //declare the loader and the function that modifie it
      const [isDataLoading , setDataLoading] = useState(true);

      // declare the error page when api does not return data
      const [isError, setIsError] = useState(null);
      
      useEffect(() => {
         //as long as the data is loading, the loader is displayed
         setDataLoading(true);
         //when the data is retrieved, the content is got.
          const fetchData = async() => {
            try {
               const response = await axios.get(endpoint);              
               setData(response.data.data);               
             } catch (error) {
               setIsError(error)
             }
             setDataLoading(false);
         }

         fetchData()
      //re-trigger(redeclencher) the call in case of change either of endpoint, userId, service
      }, [endpoint,userId, service])

 return {data, isDataLoading, isError}

} 

export default useFechData