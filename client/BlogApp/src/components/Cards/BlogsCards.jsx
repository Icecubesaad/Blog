import React from 'react';
import Tags from './Tags';
import {Link} from "react-router-dom"
import AppContext from '../Function/AppContext';
import { useState } from 'react';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
const BlogsCards = (props) => {
    const {id} = useParams()
    const location = useLocation()
    const [style, setstyle] = useState({
        border:"2px solid white",borderRadius:"11px",backgroundColor:"black"
    });
    const changeStyle = ()=>{
        if(location.pathname === `/blogs/${id}`){
            setstyle({
                border:"2px solid white",borderRadius:"11px",backgroundColor:"#bdbdbd", transition:"all 300ms", color:"black"
            })
        }
    }
    const changeagain = ()=>{
        if(location.pathname === `/blogs/${id}`){
            setstyle({
                border:"2px solid white",borderRadius:"11px",backgroundColor:"black",transition:"all 300ms",color:"white"
            })
        }
    }
    const context = useContext(AppContext);
    const {setBlogsId} = context;
    return (
        <Link to={`/blogs/${props.id}`} style={{textDecoration:"none",color:"#f8f8f8"}}>
            {setBlogsId(props.Id)}
            <div className='GridBox' onMouseEnter={changeStyle} onMouseLeave={changeagain} style={style}>
            <div className='Utilities'>
            <div className='Tags'>
                <Tags content={props.tags}/>
            </div>
            </div>
            <div className='Title' style={props.style}>
                {props.title}
            </div>
            <div className='Rating'>
                <div style={{display:"flex",flexDirection:"row"}}>
                <div className='Reactions'>
                ❤️{props.likes}
                </div>
                <div style={{marginLeft:"30px"}}>
                    By : {props.author}
                </div>
                </div>
                <div className='Date' style={{fontSize:"0.9rem"}}>
                    {props.date.map(e=>e.date+"/"+e.month+"/"+e.year)}
                </div>
            </div>
        </div></Link>
    );
}

export default BlogsCards;
