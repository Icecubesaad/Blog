import React, { useContext } from 'react';
import { useState } from 'react';
import AppContext from '../Function/AppContext';
import { useEffect } from 'react';
import  {useNavigate} from 'react-router-dom';
import { useRef } from 'react';
import Error from '../Alert/Error';
import Spinner from "../spinner/BigSpinner";
const BlogsAdd = () => {
    const [option, setoption] = useState(false);
    const searchBoxRef = useRef(null);
    
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchBoxRef.current && !searchBoxRef.current.contains(event.target)) {
        setoption(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [option]);
    const [fields, setfield] = useState([
        {"name" : "Sports"},
        {"name" : "Music/Entertainment"},
        {"name" : "Programming"},
        {"name" : "Health"},
        {"name" : "Travel"},
    ]);
    const [filtered, setfiltered] = useState(fields);
    const [errors, seterrors] = useState(false);
    const [Loading, setloading] = useState(false);
    const [imageFile, setimage] = useState();
  const fileInputRef = useRef(null);

  const handleSelectFile =() => {
    fileInputRef.current.click();
  };
  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload=()=>{
      setimage(reader.result)
    };
  };
    const [style, setstyle] = useState({
        style:{
            height:"50px",marginRight:"20px",backgroundColor:"black",border:"2px solid white", color:"white", borderRadius:"7px", width:"150px",transition:"all 300ms", marginLeft:"20px"
        },
        image:{
            height:"50px",marginRight:"20px",backgroundColor:"white",border:"2px solid black", color:"black", borderRadius:"7px", width:"150px",transition:"all 300ms",marginLeft:"20px",marginBottom:"10px"
        }
      });
      const changes= ()=>{
        setstyle({
            style:{
                height:"50px",marginRight:"20px",backgroundColor:"white",border:"2px solid black", color:"black", borderRadius:"7px", width:"150px",transition:"all 300ms", marginLeft:"20px"
            },
            image:{
                height:"50px",marginRight:"20px",backgroundColor:"black",border:"2px solid white", color:"white", borderRadius:"7px", width:"150px",transition:"all 300ms",marginLeft:"20px",marginBottom:"10px"
            }
        },{
    
        })
    }
    const changeAgain = ()=>{
        setstyle({
            style:{
                height:"50px",marginRight:"20px",backgroundColor:"black",border:"2px solid white", color:"white", borderRadius:"7px", width:"150px",transition:"all 300ms", marginLeft:"20px"
            },
            image:{
                height:"50px",marginRight:"20px",backgroundColor:"white",border:"2px solid black", color:"black", borderRadius:"7px", width:"150px",transition:"all 300ms",marginLeft:"20px",marginBottom:"10px"
            }
        })
    }
    const navigate = useNavigate();
    const context = useContext(AppContext)
    const {userinfo,getUser} = context
    useEffect(() => {
        if(window.localStorage.getItem("key")){
            getUser()
        }
        else{
            navigate("/signin")
        }
    }, []);
    const [Blogs, setBlogs] = useState({
        "title":"",
        "description":"",
        "cut":"",
        "field":""
    });
    const change = (e)=>{
        const key = e.target.name;
        const value = e.target.value;
        setBlogs({...Blogs,[key]:value})
        if(Blogs.field.length<=1){
            setfiltered(fields)
        }
        else{
            const filter = fields.filter(e=>
                e.name.toLowerCase().includes(Blogs.field.toLowerCase())
            ) 
            setfiltered(filter)
            if(filtered.length ===0){
                seterrors(true)
            }
            else{
                seterrors(false)
            }
        }
        let tagscheck = Blogs.cut.split(",")
        if(tagscheck.length > 3){
            seterrors(true)
        }
        else{
            seterrors(false)
        }
    }
    const Post = async()=>{
        setloading(true)
        const {title,description,cut,field} = Blogs
        const tags = cut.split(",");
        const data = await fetch("/api/blogs/Post",{
            method:"POST",
            headers:{
                "jwt_token":localStorage.getItem('key'),
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                title,description,tags,user:userinfo.UserName,field,image:imageFile
            })
        })
        const parsed = await data.json()
        console.log(data)
        if(data.status === 200){
            setloading(false)
            navigate("/")
        }
    }
    return (
        <div className='containerl'>
            <h1 style={{textAlign:"center",paddingTop:"20px"}}>Add your blog</h1>
            <div className='containerli'>
            <h3 style={{marginLeft:"20px"}}>Title</h3> <input name="title" onChange={change} value={Blogs.title} placeholder='Enter the title here'/>
            <h3 style={{marginLeft:"20px"}}>Tags</h3> <input name="cut" onChange={change} value={Blogs.tags} placeholder='Enter the tags here'/>
            <p style={{marginLeft:"20px"}} >enter "," after every tag</p>
            {errors ? <p><Error message=" Maximum limit of tags is 3 "/></p> : null}


            <h3 style={{marginLeft:"20px"}}>Field</h3> <input onClick={()=>setoption(true)} name="field" onChange={change} value={Blogs.field} placeholder='Enter the field here'/>
            </div>
           { filtered.length > 0 ?  <div ref={searchBoxRef} style={{display:"flex",zIndex:"999",backgroundColor:"white",color:"black",flexDirection:"column",width:"60%",marginTop:"10px",marginLeft:"20px",border:"none",borderRadius:"7px"}}>{option ? 
                 filtered.map(e=><div onClick={() => {setBlogs(prevState => ({ ...prevState, field: e.name })),setoption(false)}}  style={{width:"60%",fontSize:"1rem",marginLeft:"20px",cursor:"pointer"}}>{e.name}</div>)
                : null} </div> : <p style={{marginLeft:"20px"}}><Error message=" Please select from the given options "/></p>}
            
            <h3 style={{marginTop:"10px",marginLeft:"20px"}}>Description</h3> <textarea id='desc' name="description" onChange={change} value={Blogs.description} placeholder='Enter the description here'/>
            <br/>
            <p style={{marginLeft:"20px"}} >Select image for your blog</p>
            <button className="select-file-btn" onMouseOver={changes} onMouseLeave={changeAgain}  style={style.image} onClick={handleSelectFile}>
            Select File
          </button>
          <input
            type="file"
            ref={fileInputRef}
            className="file-input"
            onChange={handleFileInputChange}
          />
            <br/>
            <p style={{marginLeft:"20px"}} >upload</p>
            <div style={{display:"flex",flexDirection:"row"}}>
            <button  onClick={Post} onMouseOver={changes} onMouseLeave={changeAgain} style={style.style}>Submit</button>
            {Loading ? <Spinner/> : null }
            </div>
        </div>
    );
}

export default BlogsAdd;
