import React, { useState } from 'react';



const Addtask = ({addTask}) => {
  const [value,setValue] = useState('');

  const clickalert = () =>{
    addTask(value);
setValue("");

  }
//  const changealert = () =>{
//     alert(target.value);
//   }
  return (
    <>
    <div className='input-container'>
<input type='text' className='input' placeholder='Add a new Task'
 value={value} onChange={(e)=>{setValue(e.target.value)}}/>
<button className='add-btn' onClick={clickalert} >ADD</button>
    </div>
    </>
  )
}

export default Addtask