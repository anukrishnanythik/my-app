import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Child from "./components/Child";
import Bootstrap from "./components/Bootstrap";
import Todotwo from "./components/Todotwo";
import Eventhooks from "./components/Eventhooks";
import States from "./components/States";
import Conditions from "./components/Conditions";
import Keys from "./components/Keys";
import Other from "./components/Other";
import Form from "./components/Form";
import Products from "./components/products/Products";

import Todo from "./components/Todoapp/Todo";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  //  props
  const states = [
    { name: "kerala", lang: "mal" },
    { name: "tnadu", lang: "tamil" },
    { name: "andhra", lang: "telungu" },
  ];

 

  return (
    <div className="App">
      <ul className="d-inline-flex list-unstyled p-3 ms-3">
        <li className=" me-1">
          <Link to="Home"> Home</Link>
        </li>
        <li className=" me-1">
          <Link to="/"> Header</Link>
        </li>
        <li className=" me-1">
          <Link to="boot">Bootstrap</Link>
        </li>
        <li className=" me-1">
          <Link to="todotwo">Todotwo</Link>
        </li>
        <li className=" me-1">
          <Link to="hook">Hooks</Link>
        </li>
        <li className=" me-1">
          <Link to="Keys">Keys</Link>
        </li>
        <li className=" me-1">
          <Link to="Products">Products</Link>
        </li>
        <li className=" me-1">
          <Link to="States">States</Link>
        </li>
        <li className=" me-1">
          <Link to="Conditions">Conditions</Link>
        </li>
        <li className=" me-1">
          <Link to="Todo">Todo</Link>
        </li>
        <li className=" me-1">
          <Link to="Other">Other</Link>
        </li>
        <li className=" me-1">
          <Link to="Form">Form</Link>
        </li>
      </ul>
    
      <Routes>
        <Route path="Home/:id" element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="/" element={<Header />} />
        <Route path="todotwo" element={<Todotwo />} />
        <Route path="boot" element={<Bootstrap />} />
        <Route path="hook" element={<Eventhooks />} />
        <Route path="Keys" element={<Keys />} />
        <Route path="Products" element={<Products />} />
        <Route path="States" element={<States state={states}>  <h3>Hello other</h3>
        </States>} />
        <Route path="Conditions" element={<Conditions loggedin={false} />} />
        <Route path="Todo" element={<Todo />} />
        <Route path="*" element={<Child />} />
        <Route path="Other" element={<Other/>} />
        <Route path="Form" element={<Form/>} />
      </Routes>
      {/* 
      <States name={"kerala"} lang={"mal"}/>
      <States name={"tnadu"} lang={"tamil"}/>
      <States name={"andhra"} lang={"telungu"}/> */}
     
    </div>
  );
}

export default App;
