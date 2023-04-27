import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import Signin from './Authentication/Signin';
import Signup from './Authentication/Signup';
export default function Auth() {
    const [AUTH, setAUth] = useState(true);
    const location = useLocation()
    const [changeTitle, setchangeTitle] = useState({
        FirstPage: "",
        SecondPage: ""
    });
    useEffect(() => {
        if (location.pathname === "/signin") {
            setchangeTitle({
                FirstPage: "Login",
                SecondPage: "Signup"
            })
            setAUth(true)
        }
        if (location.pathname === '/signup') {
            setchangeTitle({
                FirstPage: "Signup",
                SecondPage: "Login"
            })
            setAUth(false)
        }
    }, []);
    const [styleT, setstyle] = useState({
        "transform": "scaleX(1)",
        "transition": "all 1s"
    });
    const flip = () => {
        setstyle({
            "transform": "scaleX(1)",
            "transition": "all 1s"
        })
    }
    const flip2 = () => {
        setstyle({
            "transform": "scaleX(-1)",
            "transition": "all 1s"
        })
    }
    //SIGN IN PORT
   
    return (
        <div className='papa-container'>
            <div class="container">
                <input type="checkbox" id="flip" />
                <div class="cover">
                    <div class="front">
                        <div class="text">
                            <span class="text-1" style={styleT}>Every new friend is a <br /> new adventure</span>
                            <span class="text-2" style={styleT}>Let's get connected</span>
                        </div>
                    </div>
                    <div class="back">
                        <div class="text">
                            <span class="text-1" style={styleT}>Complete miles of journey <br /> with one step</span>
                            <span class="text-2" style={styleT}>Let's get started</span>
                        </div>
                    </div>
                </div>
                <div class="forms">
                    <div class="form-content">
                        {AUTH ? <Signin func={flip}/> : <Signup func={flip2} />}
                        {AUTH ? <Signup func={flip2} />:<Signin func={flip}/>}
                    </div>
                </div>
            </div>
        </div>

    );
}
