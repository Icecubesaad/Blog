import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const NotSignedIn = () => {
    const [style, setstyle] = useState({
        signin:{
            height:"50px",marginRight:"20px",backgroundColor:"white",border:"2px solid white", color:"black", borderRadius:"7px", width:"100px",transition:"all 300ms"
        },
        signup:{
            height:"50px",backgroundColor:"black",border:"2px solid white", color:"white", borderRadius:"7px", width:"100px",transition:"all 300ms"
        }
    });
    const change= ()=>{
        setstyle({
            signin:{
                height:"50px",marginRight:"20px",backgroundColor:"black",border:"2px solid white", color:"white", borderRadius:"7px", width:"100px",transition:"all 300ms"
            },
            signup:{
                height:"50px",backgroundColor:"white",border:"2px solid white", color:"black", borderRadius:"7px", width:"100px",transition:"all 300ms"
            }
        },{

        })
    }
    const changeAgain = ()=>{
        setstyle({
            signin:{
                height:"50px",marginRight:"20px",backgroundColor:"white",border:"2px solid white", color:"black", borderRadius:"7px", width:"100px",transition:"all 300ms"
            },
            signup:{
                height:"50px",backgroundColor:"black",border:"2px solid white", color:"white", borderRadius:"7px", width:"100px",transition:"all 300ms"
            }
        })
    }
    return (
        <div>
             <Link to="/signin"><button onMouseLeave={changeAgain} onMouseOver={change}  style={style.signin}>sign in</button></Link>
          <Link to="/signup"><button onMouseLeave={changeAgain} onMouseOver={change} style={style.signup}>sign up</button></Link>
        </div>
    );
}

export default NotSignedIn;
