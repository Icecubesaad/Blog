import React from 'react';
import Tags from './Tags';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
const BlogsCards = () => {
    return (
        <div className='GridBox'>
            <div className='Utilities'>
            <div className='Tags'>
                hehe
                <Tags/>
            </div>
            <div className='Save'>
                <BookmarkBorderIcon/>
            </div>
            </div>
            <div className='Title'>
                Why and how saad is a negro
            </div>
            <div className='Rating'>
                <div className='Reactions'>
                    Reaction
                </div>
                <div className='Date'>
                    9/10/2020
                </div>
            </div>
        </div>
    );
}

export default BlogsCards;
