import React, { useEffect } from 'react';
import { useRef } from 'react';
import { useContext } from 'react';
import AppContext from './Function/AppContext';
import {Link} from 'react-router-dom'
import { useState } from 'react';
const Popup = ({ closeSearchBox }) => {
  const searchBoxRef = useRef(null);
  const context = useContext(AppContext)
  const {BlogsFetch} = context
  const [bgColors, setBgColors] = useState(BlogsFetch.map(() => 'grey'));
  const [filtered, setfiltered] = useState(BlogsFetch);
  const [input, setinput] = useState("");
  const handleMouseOver = (index) => {
    const newBgColors = [...bgColors];
    newBgColors[index] = 'rgb(224, 224, 224)';
    setBgColors(newBgColors);
  };
  const change = (target)=>{
    setinput(target.target.value)
    const filter = BlogsFetch.filter(e=>{
      return e.Title.toLowerCase().includes(target.target.value.toLowerCase())
    })
    setfiltered(filter)
  }
  const handleMouseLeave = (index) => {
    const newBgColors = [...bgColors];
    newBgColors[index] = 'grey';
    setBgColors(newBgColors);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchBoxRef.current && !searchBoxRef.current.contains(event.target)) {
        closeSearchBox();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [closeSearchBox]);

  return (
    <div className="search-box">
      <div className="search-box-content" style={{display:"flex",flexDirection:"column"}} ref={searchBoxRef}>
        <div className='search'>

        <input style={{height:"50px",}} className="form-control me-2 my-2" type="search" onChange={change} value={input} placeholder="Search" aria-label="Search" />
        </div>
        <div className='options' style={{display:"flex",flexDirection:"column", }}>
      {filtered.map((e, index) => (
        <Link style={{ textDecoration: 'none',color:"black" }} to={`/blogs/${e.Id}`} key={e.id}>
          <div
            style={{ backgroundColor: bgColors[index],height:"50px",width:"100%",paddingLeft:"30px",display:"grid", gridTemplateColumns:"repeat(3,1fr)"}}
            onMouseOver={() => handleMouseOver(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <div style={{alignSelf:"center", justifySelf:"left"}}>{e.Title}</div>
            <div style={{alignSelf:"center", justifySelf:"center"}}>by : {e.User}</div>
            <div style={{alignSelf:"center", justifySelf:"center"}}>{e.Likes}❤️</div>
          </div>
        </Link>
      ))}
        </div>

      </div>
    </div>
  );
};

export default Popup;
