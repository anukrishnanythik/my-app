import React from "react";

// const States = (props) => {
//   return (
//     <>
//     <h2>{props.name}</h2>
//     <h2>{props.lang}</h2>
//     <h3>{children}</h3> 
//     </>
//   )
// }

// const States = ({name,lang}) => {
//     return (
//       <>
//       <h2>{name}</h2>
//       <h2>{lang}</h2>
//       </>
//     )
//   }

const States = ({ state,children}) => {
  const items = ["apple", "orange", "mango"];

  return (
    <>
      {state.map((states) => (
        <div key={states.name}>
          <ul>
            <li>{states.name}</li>
            <li>{states.lang}</li>
          </ul>
        </div>
      ))}
      {items.map((item) => (
      <div key={item}>
        <p>-{item}</p>
        </div>
      ))}

      <h3>{children}</h3>
    </>
  );
};

export default States;
