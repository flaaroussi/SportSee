import { Fragment } from "react";
import './App.scss';
import Navbar from './Components/Navbar';
import Sidebar from "./Components/Sidebar";
import Router from "./Routes/Routes";


function App (){

   return (<Fragment>
      <Navbar />      
      <Router />
      <Sidebar />
   </Fragment>)

}

export default App