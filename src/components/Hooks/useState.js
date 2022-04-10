import './style.css';

import React, { useState } from 'react'

const UseState = () => {
    const initialData = 0;
    const [myNum, setMYNum] = useState(initialData);
    console.log(myNum);

  return (
    <>
    <div className='center_div'>
        <p>{myNum}</p>
        <div className='button2' onClick={() => setMYNum(myNum + 1)}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            INCR
        </div>
        <div className='button2' onClick={() => myNum > 0 ? setMYNum(myNum - 1) : setMYNum(0)}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        DECR
        </div>
    </div>
    </>
  )
}

export default UseState