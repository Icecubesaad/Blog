import React from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import BlogsCards from '../Cards/BlogsCards';
import Spinner from '../spinner/BigSpinner';
const SidebarBlogs = () => {
    const [state, setstate] = useState([]);
    const {id} = useParams()
    useEffect(() => {
        FetchRelatableBlogs()
        fetchHot();
    }, [id]);
    const [ShowHot, setShowHot] = useState("");
  const fetchHot = async()=>{
    const data = await fetch(`/api/blogs/hot`,{
      method:"GET",
    })
    const parsed_hot = await data.json()
    console.log(data)
    console.log(parsed_hot)

    setShowHot(parsed_hot)
  }
    const FetchRelatableBlogs = async()=>{
        const data = await fetch(`/api/blogs/Relate/${id}`,{
            method:"GET"
        })
        const parsed = await data.json()
        filter(parsed)
    }
    const filter = (parsed)=>{
        const filtering = parsed.filter((e)=>{
            return e.Id !== id;
        })
        setstate(filtering)
    }
    return (
        <div className='sidebar-blogs' style={{width:"20%",marginRight:"30px",display:"flex",flexDirection:"column",gap:"50px"}}>
            {state.length >= 1 ?
  <div>
    <h2>Relatable Posts</h2>
    {state.map(e => <BlogsCards title={e.Title} date={e.Date} likes={e.Likes} tags={null} id={e.Id} style={{fontSize:"1rem"}}/>)}
  </div>
  : <h2>Trending posts</h2>
}
{ShowHot.length > 0 ? 
  ShowHot.map(e => <BlogsCards title={e.Title} date={e.Date} likes={e.Likes} tags={null} id={e.Id} style={{fontSize:"1rem"}}/>)
  : <Spinner/>
}


        </div>
    );
}

export default SidebarBlogs;
