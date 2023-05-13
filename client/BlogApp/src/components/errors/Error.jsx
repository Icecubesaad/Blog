import React from 'react';

const Error = (props) => {
    return (
        <div style={{color:"red"}}>
            <p>{props.message}</p>
        </div>
    );
}

export default Error;
