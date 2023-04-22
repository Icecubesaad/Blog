import React, { useState } from "react";
import CodeIcon from "@mui/icons-material/Code";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ApartmentIcon from "@mui/icons-material/Apartment";

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
    { MUI: <SportsEsportsIcon />, text: "Gaming" },
    { MUI: <MoreVertIcon />, text: "UI/UX" },
    { MUI: <ApartmentIcon />, text: "Commercials" },
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
  });

  const [listStyles, setListStyles] = useState(
    options.map(() => ({
      height: "30px",
      width: "99%",
      display: "flex",
      flexDirection: "row",
      marginLeft: "0px",
      backgroundColor: "black",
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
        })
        setstylepara({
            display:"inline-block",
            transition:"all 2s"
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
          <li
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
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
