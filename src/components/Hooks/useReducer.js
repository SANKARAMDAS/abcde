import './style.css';

import React, { useReducer} from 'react'

const reducer = (state, action) =>{
  if(action.type === "INCR"){
    state = state + 1;
  }

  if(state > 0 && action.type === "DECR"){
    state = state - 1;
  }

  if(state > 0 && action.type === "DECRby2"){
    state = state - 2;
  }

  return state;
};

const UseReducer = () => {
  const initialData = 0;
  const[state, dispatch] = useReducer(reducer, initialData);
//     const initialData = 0;
//     const [myNum, setMYNum] = useState(initialData);
//     // console.log(myNum);

//     useEffect(() => {
//  document.title = `Chats(${myNum})`
//     },);

  return (
    <>
    <div className='center_div'>
        <p>{state}</p>
        <div className='button2' onClick={() => dispatch({type: "INCR"})}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            INCR
        </div>
        <div className='button2' onClick={() => dispatch({type: "DECR"})}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            DECR
        </div>
        <div className='button2' onClick={() => dispatch({type: "DECRby2"})}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            DECRby2
        </div>
    </div>
    </>
  )
}

export default UseReducer