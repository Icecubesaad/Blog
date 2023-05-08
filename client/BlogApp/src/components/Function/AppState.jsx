import { useState } from "react";
import AppContext from "./AppContext";
const AppState = (props) => {
    const [BlogsId, setBlogsId] = useState("");
    const [userinfo, setuserinfo] = useState({});
    const [loggedIN, setloggedIN] = useState(true);
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
  <AppContext.Provider value={{userinfo,setuserinfo,getUser,BlogsId,setBlogsId,loggedIN,setloggedIN}}>
    {props.children}
    </AppContext.Provider>)
};

export default AppState;
