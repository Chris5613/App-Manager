import React, {useEffect, useState} from 'react';


const Task = ({task, onDelete}) => {

    const [tasks, setTask] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/api/tasks/')
            .then(response => response.json())
            .then(data => setTask(data))
        }, []);

    return (
        <div key={tasks.id} className="task">
            <h3>{tasks.text}
            <i className="fa-solid fa-x delete" onClick={() => onDelete(task.id)}></i></h3>
            <p>Due: {tasks.day}</p>
        </div>
    )
}
export default Task
