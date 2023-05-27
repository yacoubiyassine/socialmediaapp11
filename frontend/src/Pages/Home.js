import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Compnents/Navbar/indexN";
import UsernameCard from "./Compnents/Navbar/UsernameCard";
import Sidebar from "./Compnents/Navbar/Sidbar";
import People from "./Compnents/People/People";
import Photos from "./Compnents/Photos/Photos";
import Rightcontainer from "./Compnents/Rightsidecontainer/Rightcontainer";
import Leftcontainer from "./Compnents/Leftsidecontainer/Leftcontainer"
import Mainpost from "./Compnents/Mainpost/Mainpost";


const Home = () =>{
    const [connectedUser, setConnectUser] = useState({});

    const navigate = useNavigate()

     const getConnectedUserData = () =>{

       setConnectUser( JSON.parse(localStorage.getItem("user_data") ) );
      // console.log(localStorage.getItem("user_data") )



     
     };
    useEffect(() =>{
       
       getConnectedUserData()
       if(localStorage.getItem("user_data") == null ){ 
        // user not connected
       // redirection vers la page login*
     navigate("/login");

    }
    }, []);

   return(
      <>
      <Navbar />
      <UsernameCard user = {connectedUser}/> 
      <Sidebar />
      <div className="Home">
      <Mainpost />
      <Rightcontainer />
      <Leftcontainer />
      </div>
      <div>
      <People />
      <Photos />
      </div>
      
         {/* <h1> Hello {connectedUser.lastname +` `+ connectedUser.firstname} </h1>*/}
      
      
      </>

   )


}
export default Home;