import React from 'react';

const Error = (props) => {
    return (
        <div style={{color:"red",fontWeight:"500"}}>
            <p>{props.message}</p>
        </div>
    );
}

export default Error;
