import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import BlogsCards from '../Cards/BlogsCards';
const SidebarBlogs = () => {
    const [state, setstate] = useState([]);
    const {id} = useParams()
    useEffect(() => {
        FetchRelatableBlogs()
    }, []);
    const FetchRelatableBlogs = async()=>{
        const data = await fetch(`/api/blogs/Relate/${id}`,{
            method:"GET"
        })
        const parsed = await data.json()
        const filtering = parsed.filter((e)=>{
            return e.Id !== id;
        })
        setstate(filtering)
    }
    return (
        <div className='sidebar-blogs' style={{width:"20%",marginRight:"30px"}}>
            {state.length >=1 ? state.map(e=><BlogsCards title={e.Title} date={e.Date} tags={null} style={{fontSize:"1rem"}}/>  ) : <div>loading</div>}
        </div>
    );
}

export default SidebarBlogs;
