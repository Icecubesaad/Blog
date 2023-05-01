import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import SidebarBlogs from './SideComponent/SidebarBlogs';
import Header from './Header';
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
        <>
        <Header/>
        <div className='container-Show' style={{display:"flex",flexDirection:"row",marginTop:"50px"}}>
        <div className='container-blogs' style={{width:"80%",paddingLeft:"30px"}}>
            <div className='img-blog' style={{height:"300px",width:"60%",backgroundColor:"red"}}></div>
            <div className='title-blogs' style={{fontSize:"2rem",fontFamily:"Heebo",fontWeight:"1000"}}>{ShowBlogs.Title}</div>
            <div className='desc-blogs' style={{fontSize:"1rem",fontFamily:"Heebo",fontWeight:"600"}}>{ShowBlogs.Description}</div>
        </div>
        <SidebarBlogs/>
        </div>
        </>

    );
}

export default ShowBlogs;
