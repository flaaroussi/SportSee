import { Routes, Route, Navigate  } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Error from "../Pages/Error";
import InProgress from "../Pages/InProgress";

/** 
 * Routes application
 * @returns {objet} 
 */

export default function Router(){

   return <Routes>  
            <Route path="/" element={<Navigate to ="/dashboard/12" />}  />
            <Route path="/dashboard/:userId" element={<Dashboard exact="true"/>} />
            <Route path="*" element={<Error />}  />

            <Route path="/profil" element={<InProgress page="Profil" />}  />
            <Route path="/reglage" element={<InProgress page="Réglage"/>}  />  
            <Route path="/communite" element={<InProgress page="Communité"/>} />
            <Route path="/yoga" element={<InProgress page="Yoga"/>}  />
            <Route path="/swimming" element={<InProgress page="Swimming"/>}  />
            <Route path="/biking" element={<InProgress page="Biking"/>}  />
            <Route path="/bodyBuilding" element={<InProgress page="BodyBuilding" />}  />

   </Routes>
   
}