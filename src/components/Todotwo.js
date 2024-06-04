import React, { useEffect, useState } from "react";
import "./Todotwo.css";

const Todotwo = () => {
  const [tasks,setTasks] = useState([ ]);
  let [value,setValue] = useState("");
  useEffect(()=>{
    document.title =`You have ${tasks.length} pending task`;
    });
  const handlevalue=(event)=>{
    setValue((value=event.target.value));
}   

const clickalert = () =>{
  const newTask = [...tasks];
  newTask.push(value);
  setTasks(newTask);
 setValue("");
}

const removeTask = (index) =>{
  const newTask = [...tasks];
  newTask.splice(index,1)
  setTasks(newTask);
}
  return (
    <>
      <div className="todo-container">
        <div className="header">TODO TWO APP</div>

        {/* addtask */}
        <div className="add-task">
          <div className="input-container">
            <input type="text" onChange={handlevalue}  value={value} className="input" placeholder="Add a new Task" />
        
            <button className="add-btn"  onClick={clickalert}>ADD</button>
          </div>
        </div>

        {/* listtask */}
        <div className="tasks">
       


        {tasks.map((task,index) => (
        <div className="listtasks">
       {task}
       <button onClick={()=>{removeTask(index)}} className='deletebtn'>Delete</button>

        </div>
      ))}

        </div>
      </div>

    

    </>
  );
};

export default Todotwo;
