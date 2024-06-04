import React, { useState } from 'react'

const Form = () => {

    const [first,setFirst] = useState("");
    let [second,setSecond] = useState("");

// const handleFirst=(event)=>{
//     setFirst(first=event.target.value);
    // console.log(event.target.value);


 
const handleSec=(event)=>{
    setSecond((second=event.target.value));
}   
  return (
    <>
        
        
        <h3>Form</h3>

        <input onChange={e => setFirst(e.target.value)}  type='text' name='first'/>
        {/* <input onChange={handleFirst} type='text' value=name='first'/> */}
     <br/>
        <input onChange={handleSec} type='text' value={second} name='second'/>
<h4>{second} </h4>

    </>
  )
}

export default Form