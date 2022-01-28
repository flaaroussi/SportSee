import { Routes, Route  } from "react-router-dom";
import Communite from "../Pages/Communite";
import Dashboard from "../Pages/Dashboard";
import Error from "../Pages/Error";
import Profil from "../Pages/Profil";
import Reglage from "../Pages/Reglage";

export default function Router(){
   return <Routes>        
            <Route path="/" element={<Dashboard />}  exact="true"/>           
            <Route path="*" element={<Error />}  />
            <Route path="/profil" element={<Profil />}  />
            <Route path="/reglage" element={<Reglage />}  />  
            <Route path="/communite" element={<Communite />}  />    
         </Routes>
}