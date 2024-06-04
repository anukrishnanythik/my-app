import React from "react";
import Child from "./Child";
import Home from "./Home";
import Keys from "./Keys";


const Conditions = ({loggedin}) => {
  let logged = false;
var age=19;
  const CheckNumber = ({ number }) => {
    if (number > 0) {
        return <Child/>
        // return <h1>positive</h1>;
    } else if (number < 0) {
      return <h1>negative</h1>;
    } else {
      return <h1>zero</h1>;
    }
  };
  return (
    <div>

      <CheckNumber number={0} />
      {/* ifelse */}
      {logged ? <h2>welcome</h2> : <h2>logg in</h2>}

      {loggedin ? <Home/> : "No entry to home"}
<br/>
      {age>=18 ? "eligible" : "not eligible"}
    </div>
  );
};

export default Conditions;
