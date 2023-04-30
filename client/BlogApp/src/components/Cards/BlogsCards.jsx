import React from 'react';
import Tags from './Tags';
import {Link} from "react-router-dom"
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import AppContext from '../Function/AppContext';
import { useContext } from 'react';
const BlogsCards = (props) => {
    const context = useContext(AppContext);
    const {setBlogsId} = context;
    return (
        <Link to={`/blogs/${props.id}`} style={{textDecoration:"none",color:"black"}}>
            {setBlogsId(props.Id)}
            <div className='GridBox' >
            <div className='Utilities'>
            <div className='Tags'>
                <Tags content={props.tags}/>
            </div>
            <div className='Save'>
                <BookmarkBorderIcon/>
            </div>
            </div>
            <div className='Title'>
                {props.title}
            </div>
            <div className='Rating'>
                <div className='Reactions'>
                    Reaction
                </div>
                <div className='Date'>
                    {props.date.map(e=>e.date+"/"+e.month+"/"+e.year)}
                </div>
            </div>
        </div></Link>
    );
}

export default BlogsCards;
