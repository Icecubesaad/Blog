import React from 'react';
import SideBar from './SideComponent/SideBar';
import MainBlog from './MainBlog';

const Blogs = () => {
    return (
        <div className='FlexBox' style={{display:"flex",height:"84vh"}}>
            <SideBar/>
            <MainBlog/>
        </div>
    );
}

export default Blogs;
