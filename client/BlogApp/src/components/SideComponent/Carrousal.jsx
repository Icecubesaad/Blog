import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import image_1 from "../images/TOP 5 PLACES TO VISIT IN 2023.png";
import image_2 from "../images/TOP 5 PLACES TO VISIT IN 2023 (1).png";
import image_3 from "../images/TOP 5 PLACES TO VISIT IN 2023 (2).png";
import image_4 from "../images/TOP 5 PLACES TO VISIT IN 2023 (4).png";
import image_1_min from "../images/TOP 5 PLACES TO VISIT IN 2023-min.png";
import image_2_min from "../images/TOP 5 PLACES TO VISIT IN 2023 (1)-min.png";
import image_3_min from "../images/TOP 5 PLACES TO VISIT IN 2023 (2)-min.png";
import image_4_min from "../images/TOP 5 PLACES TO VISIT IN 2023 (4)-min.png";

const Carrousal = () => {
  AOS.init();

  const [value, setValue] = useState(0);

  const pics = [
    {
      img: image_1,
      compressed_img: image_1_min,
      id: "3992a5ae-cd77-4d27-b862-23ff2b61f5f1",
    },
    {
      img: image_2,
      compressed_img: image_2_min,
      id: "091946c2-3464-40b1-beab-3537e1fb3142",
    },
    {
      img: image_3,
      compressed_img: image_3_min,
      id: "5e2d3fd6-78e5-47f6-b08e-dc5210519954",
    },
    {
      img: image_4,
      compressed_img: image_4_min,
      id: "473e376e-5c00-4b82-9f43-c6464bad7a38",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((value) => (value === pics.length - 1 ? 0 : value + 1));
      AOS.refresh();
    }, 7000);
    return () => clearInterval(interval);
  }, [pics.length]);

  const forward = () => {
    setValue((value) => (value === pics.length - 1 ? 0 : value + 1));
    AOS.refresh();
  };

  const backward = () => {
    setValue((value) => (value === 0 ? pics.length - 1 : value - 1));
    AOS.refresh();
  };

  return (
    <div style={{ height: "600px", backgroundColor: "black", width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <button onClick={backward} style={{ backgroundColor: "transparent", border: "none", color: "white", fontSize: "1.3rem", marginRight: "20px", zIndex: "9999" }}><ArrowBackIosIcon /></button>
      <Link to={`/blogs/${pics[value].id}`} style={{ width: "88%" }}>
        <div key={value} data-aos="fade-left" style={{ width: "100%" }}>
          <LazyLoadImage
            src={pics[value].compressed_img} // Low-quality image
            placeholderSrc={pics[value].img} // High-quality image
            alt={`Slide ${value + 1}`}
            width="100%"
            height="600px"
            effect="blur" // Add a blur effect to the low-quality image
          />
        </div>
      </Link>
      <button onClick={forward} style={{ backgroundColor: "transparent", textDecoration: "none", border: "none", color: "white", fontSize: "1.3rem", marginLeft: "20px", zIndex: "9999" }}><ArrowForwardIosIcon /></button>
    </div>
  );
};

export default Carrousal;
