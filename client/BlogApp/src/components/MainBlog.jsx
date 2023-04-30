import React from 'react';
import BlogsCards from './Cards/BlogsCards';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
const MainBlog = () => {
    const [Blogs, setBlogs] = useState([]);
    useEffect(() => {
        FetchBlogs()
    }, []);
    const FetchBlogs = async()=>{
        const data = await fetch("/api/blogs/get",{
            method:"GET",
        })
        const real = await data.json()
        setBlogs([...Blogs,real])
    }
    return (
        <div className='Flex-Box-Cards'>
            {Blogs.map(e=>e.map(y=><BlogsCards title={y.Title} desc={y.Description} date={y.Date} tags={y.Tags} id={y.Id} />))}
        </div>
    );
}

export default MainBlog;
