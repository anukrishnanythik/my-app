import React, { useState } from "react";

const Keys = () => {
  const products = [
    { id: 1, name: "Laptop", brand: "dell", qty: 1 },
    { id: 2, name: "Laptop", brand: "hp", qty: 2 },
    { id: 3, name: "Laptop", brand: "apple", qty: 3 },
  ];

  const fruits = ["apple", "mango", "guava"];
  const [items, setItem] = useState(products);

  const changeQty = (id) => {
    const newItem = items.map((item) =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    );
    setItem(newItem);

    //  const changeQty = (id) =>{
    // id = id+1;
    //  alert(id);
  };
  return (
    <div>
      {items.map((product) => (
        <div className="bg-warning m-2" key={product.id}>
          <h2>Name:{product.name}</h2>
          <h3>Brand:{product.brand}</h3>
          <h3>Qty:{product.qty}</h3>
          <button onClick={() => changeQty(product.id)}>+</button>
        </div>
      ))}

      {fruits.map((fruit,index) => (
         <div className="bg-success m-2" key={index}> 
        <h4>{index}-{fruit}</h4>
        </div>
      ))}
    </div>
  );
};

export default Keys;
