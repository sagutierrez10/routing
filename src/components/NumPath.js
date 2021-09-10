import React from 'react';
import { useParams } from 'react-router';

const NumPath = () => {
    const {id, fontcolor, backcolor} = useParams();
    
    return (
        <div>
            {isNaN(id)?
                <h1 style={{color:fontcolor, background: backcolor}}>The word is: {id}</h1>:
                <h1>The number is: {id}</h1>
            }    
        </div>
    );
};


export default NumPath;