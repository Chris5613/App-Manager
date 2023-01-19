import React, { useState, useEffect } from 'react';

const Tasks = () => {

    const [data,setTask] = useState([])


    useEffect(() => {
        const intervalId = setInterval(() => {
            async function getTask() {
                try {
                    const response = await fetch('http://localhost:8000/api/tasks/')
                    const data = await response.json();
                    setTask(data);

                } catch (error) {
                    console.log(error)
                }
            }
            getTask();
        }, 5000);
        return () => clearInterval(intervalId);
    }, []);
    data.due_date = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})
    return (
        <>
            {data.map(tasks => (
                <div key={tasks.id} className="task">
                    <h2>{tasks.name} <i className="fa-solid fa-x delete"> </i> </h2>
                    <p>Due Date: {tasks.due_date}</p>

                </div>
            ))}
        </>
    )
}
export default Tasks
