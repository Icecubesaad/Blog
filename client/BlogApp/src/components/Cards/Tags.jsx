import React from 'react';

const Tags = (props) => {
    return (
        <div className='Tags-Cards' style={{display:"flex",flexDirection:"row",gap:"20px"}}>
            { props.content !== null ? props.content.map(e=><div>{e}</div>) : null}
        </div>
    );
}

export default Tags;
