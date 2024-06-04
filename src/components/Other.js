import React, { Component } from 'react'
class Other extends Component{
constructor(){
    super();

    this.state={
        counter:0,
    };
}


increment(){
    this.setState({counter: this.state.counter +1,});
  }

// const increment = () =>{
//     this.setState({counter: this.state.counter +1,});
//   }
render(){
    return(

        <>

        <h1>Counter: {this.state.counter}</h1>
<button onClick={()=>this.increment()}>Click</button>

        </>
    )
}
}

export default Other