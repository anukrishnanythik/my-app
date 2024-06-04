import { useEffect, useState } from "react";
import React from 'react';
import axios from 'axios';
import "./Header.css";
const Header = () => {
    const heading = {color:"blue"}; 
    const [posts, setPosts] = useState([]);
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((posts) => setPosts(posts.splice(0, 10)));
    }, []);

  return (
    // css
    <>

    <div>
        <h1 style={{color:"red"}}>header inline style</h1>
        <h2 style={heading}>header style through variable</h2>
        <h1 className="Extheading">heading external style</h1>
        <p className="Extpara">paragraph external style</p>
  
    </div>
     {posts.map((post) => (
       <div key={post.id}>
         <h6>{post.title}</h6>
         <p>{post.body}</p>
       </div>
     ))}
   </>
  )
}

export default Header;