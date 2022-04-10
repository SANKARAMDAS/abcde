import './style.css';

import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const initialData = 0;
    const [myNum, setMYNum] = useState(initialData);
    // console.log(myNum);

    useEffect(() => {
 document.title = `Chats(${myNum})`
    },);

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
    </div>
    </>
  )
}

export default UseEffect