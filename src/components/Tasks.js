
import React from 'react'
import { useState } from 'react'



const Tasks = () => {
    const [tasks, setTasks] = useState([
        {
            title: "Wash the dishes",
            complete: false
          },
          {
            title: "Walk the dog",
            complete: false
          },
          {
            title: "Make the bed",
            complete: true
          },
    ])

    return (
        <div>
          {tasks.map((task) => (<h2>{task.title}</h2>
            ))}
        </div> 
    )        
}

    export default Tasks