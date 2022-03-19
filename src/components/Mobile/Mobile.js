import React, { useState } from 'react';
import './Mobile.css'
const Mobile = () => {
    let [parcentage, setParcentage] = useState(100)
    const downBattery = () => {
        if (parcentage > 0) {
          setParcentage(parcentage-10)
        }
        else {
            setParcentage(parcentage=0)
        }
    }
    return (
        <div>
            <h1>{ parcentage}</h1>
            <button onClick={downBattery}>Battery Down</button>
        </div>
    );
};

export default Mobile;