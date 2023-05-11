import React, { useState } from "react";
import CodeIcon from "@mui/icons-material/Code";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ApartmentIcon from "@mui/icons-material/Apartment";
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import { Link } from "react-router-dom";
const SideBar = () => {
  const [StyleUI, setStyleUI] = useState({
    paddingLeft: "0px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          paddingTop: "20px",
          width: "100%",
          marginLeft:"20px",
          overflow: "hidden",
  });
    const [stylepara, setstylepara] = useState({
        display:"none",
    });
  const options = [
    { MUI: <CodeIcon />, text: "Programming" },
    { MUI: <SportsBasketballIcon />, text: "Sports" },
    { MUI: <SportsEsportsIcon />, text: "Gaming" },
    { MUI: <MusicNoteIcon />, text: "Music" },
  ];

  const [style, setStyle] = useState({
    width: "7%",
    height: "100vh",
    backgroundColor: "black",
    color: "white",
    display: "flex",
    gap: "10px",
    transition: "all 300ms",
    overflow: "hidden",
    borderLeft:"2px  solid white",
    borderRight:"2px  solid white",
  });

  const [listStyles, setListStyles] = useState(
    options.map(() => ({
      height: "38px",
      width: "95%",
      display: "flex",
      flexDirection: "row",
      marginLeft: "0px",
      backgroundColor: "black",
      alignItems:"center",
      paddingLeft:"10px"
    }))
  );

  const [hovered, setHovered] = useState(null);

  const handleListHover = (index) => {
    setHovered(index);
  };

  const handleListLeave = () => {
    setHovered(null);
  };

  return (
    <div
      className="Sidebar"
      onMouseEnter={() =>{
        setStyle({
          width: "20%",
          height: "100vh",
          backgroundColor: "black",
          color: "white",
          display: "flex",
          gap: "20px",
          transition: "all 300ms",
          borderLeft:"2px  solid white",
          borderRight:"2px  solid white",
        })
        setstylepara({
            display:"inline-block",
            transition:"all 2s",
            marginLeft :"20px"
        })
        setStyleUI({
          paddingLeft: "0px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          paddingTop: "20px",
          width: "100%",
          marginLeft:"10px",
          overflow: "hidden",
        })
    }
      
      }
      onMouseLeave={() =>{
        setStyle({
          width: "7%",
          height: "100vh",
          backgroundColor: "black",
          color: "white",
          display: "flex",
          gap: "20px",
          transition: "all 300ms",
          borderLeft:"2px  solid white",
    borderRight:"2px  solid white",
        })
        setstylepara({
            display:"none"
        })
        setStyleUI({
          paddingLeft: "0px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          paddingTop: "20px",
          width: "100%",
          marginLeft:"20px",
          overflow: "hidden",
        })
        }
      }
      style={style}
    >
      <ul
        style={StyleUI}
      >
        {options.map((e, index) => (
          <Link to={`/${e.text.includes("/") ? e.text.replace("/","") : e.text.toLowerCase()}`} style={{textDecoration:"none",color:"white"}}><li
            key={`options-${index}`}
            onMouseEnter={() => handleListHover(index)}
            onMouseLeave={handleListLeave}
            style={{
              ...listStyles[index],
              backgroundColor: hovered === index ? "grey" : "black",
              borderRadius: hovered === index ? "8px" : "0px",
            }}
          >
            {e.MUI}{" "}
            <div style={stylepara}>
              {e.text}
            </div>
          </li></Link>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
