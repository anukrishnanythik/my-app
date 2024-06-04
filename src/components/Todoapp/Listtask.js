import React from 'react'

const Listtask = ({task,index,removeTask}) => {
  return (
    <>
        <div className='listtasks'>
           
           {task.value}
        
            
            <button onClick={()=>{removeTask(index)}} className='deletebtn'>Delete</button>
        </div>
    </>
  )
}

export default Listtask