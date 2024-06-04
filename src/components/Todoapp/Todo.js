import React, { useEffect, useState } from "react";
import "./Todo.module.css";
import Addtask from "./Addtask";
import Listtask from "./Listtask";

const Todo = () => {
  const [tasks,setTasks] = useState([]);
useEffect(()=>{
document.title =`You have ${tasks.length} pending task`;
});

const addTask = (value) =>{
  const newTask = [...tasks,{value}];
  setTasks(newTask);
}

const removeTask = (index) =>{
  const newTask = [...tasks];
  newTask.splice(index,1)
  setTasks(newTask);
}



  return (
    <>
      
        <div className="todo-container">
        <div className="header">TODO APP</div>
        <div className="add-task"><Addtask addTask={addTask}
      /></div>

        <div className="tasks"> 
        {tasks.map((task,index)=>(
              <Listtask task ={task} removeTask={removeTask} index={index} key={index}/> 
         )
        )
}
        </div>
      </div>
    </>
  );
};

export default Todo;
