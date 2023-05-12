import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import Fade from 'react-reveal/Fade'
import {Link} from "react-router-dom"
import 'aos/dist/aos.css'; // You can also use <link> for styles
import image_1 from "../components/images/TOP 5 PLACES TO VISIT IN 2023.png"
import image_2 from "../components/images/TOP 5 PLACES TO VISIT IN 2023 (1).png"
import image_3 from "../components/images/TOP 5 PLACES TO VISIT IN 2023 (2).png"
import image_4 from "../components/images/TOP 5 PLACES TO VISIT IN 2023 (4).png"

const Carrousal = () => {
    AOS.init()
    const [Value, setValue] = useState(0);
    setTimeout(() => {
        if(Value===3){
            console.log("0")
            setValue(0)
            AOS.refresh();
        }
        else{
            setValue(Value+1)
            AOS.refresh();
        }
    }, 5000);

    const pics = [{
        "img":image_1
    },
    {
        "img":image_2
    },
    {
        "img":image_3
    },
{
    "img":image_4
}]
    return (
        <Link to="/signin">
        <div style={{height:"600px",width:"100%"}}>
            {
                <div key={Value} data-aos="fade-left">
                <img  src={pics[Value].img} width="100%" height="600px"/>
                </div>
            }
        </div>
        </Link>
    );
}

export default Carrousal;
