import React from 'react';

const Success = (props) => {
    return (
        <div style={{color:"green",fontWeight:"500"}}>
            <p>{props.message}</p>
        </div>
    );
}

export default Success;
