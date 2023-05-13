import React from 'react';
import { useState } from 'react';

const Tags = (props) => {
    const [style, setstyle] = useState({
        0:{
            backgroundColor : "red",
            border:"none",
            borderRadius:"7px",
            width:"auto",
            paddingRight:"10px",
            paddingLeft:"10px",
            textAlign:"center",
            height:"40px",
            display:"flex",
            alignItems:"center",
            justifyContent : "center"
        },
        1:{
            backgroundColor : "orange",
            border:"none",
            borderRadius:"7px",
            width:"auto",
            paddingRight:"10px",
            paddingLeft:"10px",
            textAlign:"center",
            height:"40px",
            display:"flex",
            alignItems:"center",
            justifyContent : "center"
        },
        2:{
            backgroundColor:"green",
            border:"none",
            borderRadius:"7px",
            width:"auto",
            paddingRight:"10px",
            paddingLeft:"10px",
            textAlign:"center",
            height:"40px",
            display:"flex",
            alignItems:"center",
            justifyContent : "center"
        }
    });
    return (
        <div className='Tags-Cards' style={{display:"flex",flexDirection:"row",gap:"20px"}}>
            { props.content !== null ? props.content.map(e=><div key={e} style={{...style[ Math.floor(Math.random() * 3)]}}>{e}</div>) : null}
        </div>
    );
}

export default Tags;
