import { useState } from "react";
import AppContext from "./AppContext";
const AppState = (props) => {
    const [userinfo, setuserinfo] = useState({});
    const getUser = async()=>{

      const getting = await fetch("/api/auth/Get",{
          method:"GET",
          headers:{
              "jwt_token":localStorage.getItem("key")
          }
      }) 
      const parsed = await getting.json()
      setuserinfo(parsed)
  }
  return(
  <AppContext.Provider value={{userinfo,setuserinfo,getUser}}>
    {props.children}
    </AppContext.Provider>)
};

export default AppState;
