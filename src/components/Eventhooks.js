import React, { useEffect, useState } from 'react'
import {Button} from 'react-bootstrap';

const Event = () => {

  const clickalert = () =>{
    alert("hello");
  }

  const dblclickalert = (name) =>{
    alert(`hello ${name}`);
  }

  const changealert = () =>{
    alert("changed");
  }

 
// hook
  const [color,setColor] = useState("green");
  const changeColor = () =>{
    setColor("red");
  }
  const [count,setCount] = useState(0);

  // only on first render
  // const [count,setCount] = useState(0);
  // useEffect(()=>{
  //   console.log("effects");
  // },[])

  // [count]-then only on that state change

  useEffect(()=>{
    console.log("effects");
  })


  const changeCountp = () =>{
    setCount(count+1);
  }
  const changeCountm = () =>{
    setCount(count-1);

  }

  return (
    <>
    {/* hooks */}
    <h2>My favourite color is {color}</h2>
    <button variant="primary" onClick={changeColor}>change color</button>


{/* events */}
<h1>count is {count}</h1>
<button onClick={changeCountp}>+</button>
<button onClick={changeCountm}>-</button>

    <h1 className="text-danger bg-primary p-3">Event</h1>
     <h1 onClick={()=>{alert("welcome")}}>click</h1>
     <br/>
     <br/>
     <Button variant="secondary" onDoubleClick={() => dblclickalert("anu")}>doubleclick</Button>
     <br/>
     <br/>
     <Button variant="info" onMouseOver={clickalert}>mouseover</Button>
     <br/>
     <br/>

 <input type = "text" onChange={changealert}/>
     <br/>
 <br/>

 <input type = "text" onKeyUp={changealert}/>
 <br/>
 <br/>

 <input type = "text" onKeyDown={changealert}/>


    </>

  )
}

export default Event