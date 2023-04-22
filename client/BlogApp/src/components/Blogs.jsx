import React from 'react';
import SideBar from './SideBar';
import BlogsCards from './Cards/BlogsCards';
import MainBlog from './MainBlog';

const Blogs = () => {
    return (
        <div className='FlexBox' style={{display:"flex",height:"70vh"}}>
            <SideBar/>
            <MainBlog/>
        </div>
    );
}

export default Blogs;
