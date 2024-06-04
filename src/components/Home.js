import React from 'react'
import Child from "./Child";
import Homecss from "./Home.module.css";
import { useParams } from "react-router-dom";


const Home = () => {
let {id} = useParams();
var age=id;

  return (

    <div>
   

{age>=18 ? "eligible" : "not eligible"}

{/* <h3>Item parameter in path {id}</h3> */}
    
<h1>{id}</h1>

        <h1>logged home component</h1>
        <h3>1+3</h3>
        <h3>{1+3}</h3>
        <h1>logged home component</h1>
        <h1 className={Homecss.Extheading}>home component heading external style</h1>

        <Child/>

    </div>
  )
}

export default Home
