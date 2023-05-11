import React from 'react';
import BlogsCards from './Cards/BlogsCards';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
const MainBlog = () => {
    const {id} = useParams();
    const [Blogs, setBlogs] = useState([]);
    const FetchBlogs = async()=>{
        const data = await fetch(`/api/blogs/get/${id}`,{
            method:"GET",
        })
        const real = await data.json()
        setBlogs([real])
    }
    useEffect(() => {
        FetchBlogs()
    }, [id]);
    return (
        <div className='Flex-Box-Cards'>
            {Blogs.map(e=>e.map(y=><BlogsCards title={y.Title} desc={y.Description} date={y.Date} tags={y.Tags} id={y.Id} style={{fontSize:"1.3rem"}} likes={y.Likes} author={y.User}/>))}
        </div>
    );
}

export default MainBlog;
