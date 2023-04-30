import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
const ShowBlogs = () => {
    const [ShowBlogs, setShowBlogs] = useState("");
    const {id} = useParams()
    useEffect(() => {
        fetchBlog()
    }, []);
    const fetchBlog= async()=>{
        const data = await fetch(`/api/blogs/filter/${id}`,{
            method:"GET",
        })
        const parsed = await data.json();
        setShowBlogs(parsed)
    }
    return (
        <div className='container-blogs'>
            <img/>
            <div className='title-blogs'>{ShowBlogs.Title}</div>
            <div className='desc-blogs'>{ShowBlogs.Description}</div>
        </div>
    );
}

export default ShowBlogs;
