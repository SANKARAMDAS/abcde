import React from 'react'

const App = () => {
  return (
    <>
    <MyApp />
    <MyApp />
      <h1 className='myclass'>
      Hello World! Welcome to my Fresh ReactJs Learning.
      </h1>
      <MyApp />
      <p>Awesome</p>
    </>
  )
};

const MyApp = () => {
  return (
    <h1>My</h1>
  )
}


export default App