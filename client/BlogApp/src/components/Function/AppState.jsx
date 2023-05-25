import { useState } from "react";
import AppContext from "./AppContext";
const AppState = (props) => {
  const [buttonHoverStyle, setbuttonHoverStyle] = useState({
    style: {
      height: "50px",
      backgroundColor: "black",
      border: "2px solid white",
      color: "white",
      borderRadius: "7px",
      width: "100px",
      transition: "all 300ms",
    },
  });
  const change= ()=>{
    setbuttonHoverStyle({
        style:{
            height:"50px",backgroundColor:"white",border:"2px solid white", color:"black", borderRadius:"7px", width:"100px",transition:"all 300ms"
        }
    },{

    })
}
const changeAgain = ()=>{
    setbuttonHoverStyle({
        style:{
            height:"50px",backgroundColor:"black",border:"2px solid white", color:"white", borderRadius:"7px", width:"100px",transition:"all 300ms"
        }
    })
}
  const [BlogsFetch, setBlogsFetch] = useState();
  const [BlogsId, setBlogsId] = useState("");
  const [userinfo, setuserinfo] = useState({});
  const [loggedIN, setloggedIN] = useState(true);
  const getUser = async () => {
    const getting = await fetch("/api/auth/Get", {
      method: "GET",
      headers: {
        jwt_token: localStorage.getItem("key"),
      },
    });
    const parsed = await getting.json();
    setuserinfo(parsed);
  };
  return (
    <AppContext.Provider
      value={{
        userinfo,
        setuserinfo,
        getUser,
        BlogsId,
        setBlogsId,
        loggedIN,
        setloggedIN,
        BlogsFetch,
        setBlogsFetch,
        buttonHoverStyle,
        change,
        changeAgain
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
