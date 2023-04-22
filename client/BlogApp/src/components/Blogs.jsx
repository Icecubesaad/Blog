import React from 'react';
import SideBar from './SideBar';
import BlogsCards from './Cards/BlogsCards';

const Blogs = () => {
    return (
        <div className='FlexBox' style={{display:"flex",}}>
            <SideBar/>
            <BlogsCards/>
        </div>
    );
}

export default Blogs;
