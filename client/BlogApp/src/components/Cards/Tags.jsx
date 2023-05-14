import React from 'react';
import { useState } from 'react';

const Tags = (props) => {
    const [style, setstyle] = useState({
        0:{
            backgroundColor : "#FF7F50",
            border:"none",
            borderRadius:"7px",
            width:"auto",
            paddingRight:"10px",
            paddingLeft:"10px",
            textAlign:"center",
            height:"40px",
            display:"flex",
            alignItems:"center",
            justifyContent : "center",
            color:"black"
        },
        1:{
            backgroundColor : "#87CEEB",
            border:"none",
            borderRadius:"7px",
            width:"auto",
            paddingRight:"10px",
            paddingLeft:"10px",
            textAlign:"center",
            height:"40px",
            display:"flex",
            alignItems:"center",
            justifyContent : "center",
            color:"black"
        },
        2:{
            backgroundColor:"#FF7F50",
            border:"none",
            borderRadius:"7px",
            width:"auto",
            paddingRight:"10px",
            paddingLeft:"10px",
            textAlign:"center",
            height:"40px",
            display:"flex",
            alignItems:"center",
            justifyContent : "center",
            color:"black"
        }
    });
    return (
        <div className='Tags-Cards' style={{display:"flex",flexDirection:"row",gap:"20px"}}>
            { props.content !== null ? props.content.map(e=><div key={e} style={{...style[ Math.floor(Math.random() * 3)]}}>{e}</div>) : null}
        </div>
    );
}

export default Tags;
