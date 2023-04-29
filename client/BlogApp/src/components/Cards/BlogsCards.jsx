import React from 'react';
import Tags from './Tags';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
const BlogsCards = (props) => {
    return (
        <div className='GridBox'>
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
        </div>
    );
}

export default BlogsCards;
