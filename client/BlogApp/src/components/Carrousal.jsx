import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import AOS from 'aos';
import Fade from 'react-reveal/Fade'
import 'aos/dist/aos.css'; // You can also use <link> for styles

const Carrousal = () => {
    AOS.init()
    const [Value, setValue] = useState(0);
    setTimeout(() => {
        if(Value===2){
            console.log("0")
            setValue(0)
            AOS.refresh();
        }
        else{
            setValue(Value+1)
            AOS.refresh();
        }
    }, 4000);

    const pics = [{
        "img":"https://cdn.shopify.com/s/files/1/0603/6412/8462/articles/New-HD-Good-Night-Images-Pics-and-Wishes-2023-viraasi.jpg?v=1673265693"
    },
    {
        "img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS21P_8KKvTefCFaPLUtu1KVZmvMayWgRg9vA&usqp=CAU"
    },
    {
        "img":"https://whatson.ae/wp-content/uploads/2023/02/pics-of-the-week-feature.gif"
    }]
    return (
        <div style={{height:"500px",width:"100%"}}>
            {
                <div key={Value} data-aos="fade-left">
                <img  src={pics[Value].img} width="100%" height="500px"/>
                </div>
            }
        </div>
    );
}

export default Carrousal;
