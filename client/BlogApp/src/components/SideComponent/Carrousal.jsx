import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import AOS from "aos";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import "aos/dist/aos.css"; // You can also use <link> for styles
import image_1 from "../images/TOP 5 PLACES TO VISIT IN 2023.png";
import image_2 from "../images/TOP 5 PLACES TO VISIT IN 2023 (1).png";
import image_3 from "../images/TOP 5 PLACES TO VISIT IN 2023 (2).png";
import image_4 from "../images/TOP 5 PLACES TO VISIT IN 2023 (4).png";

const Carrousal = () => {
  AOS.init();
  const [Value, setValue] = useState(0);
  setTimeout(() => {
    if (Value === 3) {
      console.log("0");
      setValue(0);
      AOS.refresh();
    } else {
      setValue(Value + 1);
      AOS.refresh();
    }
  }, 5000);

  const pics = [
    {
      img: image_1,
      id: "3992a5ae-cd77-4d27-b862-23ff2b61f5f1",
    },
    {
      img: image_2,
      id: "091946c2-3464-40b1-beab-3537e1fb3142",
    },
    {
      img: image_3,
      id: "5e2d3fd6-78e5-47f6-b08e-dc5210519954",
    },
    {
      img: image_4,
      id: "473e376e-5c00-4b82-9f43-c6464bad7a38",
    },
  ];
  return (
    <Link to={`/blogs/${pics[Value].id}`}>
      <div style={{ height: "600px", width: "100%" }}>
        {
          <div key={Value} data-aos="fade-left">
            <img src={pics[Value].img} width="100%" height="600px" />
          </div>
        }
      </div>
    </Link>
  );
};

export default Carrousal;
