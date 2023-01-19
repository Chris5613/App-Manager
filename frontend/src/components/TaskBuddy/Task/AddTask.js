import React, {useState} from 'react';


const AddTask = ({onAdd}) => {
    const [name,setTask] = useState('')
    const [due_date,setDue_date] = useState('')


    const handleTaskChange = (event) => {
        const value = event.target.value
        setTask(value)
    }

    const handleDueDateChange = (event) => {
        const value = event.target.value
        setDue_date(value)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        const data = {}

        data.name = name;
        data.due_date = due_date;

        const taskUrl = 'http://localhost:8000/api/tasks/'
        const fetchConfig = {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        }

        const response = await fetch(taskUrl, fetchConfig)
        if(response.ok) {
            const newTask = await response.json()
            console.log(newTask)

            setTask("")
            setDue_date("")
        }
    }


//     const fetchData = async () => {
//         const url = 'http://localhost:8000/api/states/';
//         const response = await fetch(url);

//         if (response.ok) {
//             const data = await response.json();
//             setTask(data.task);
//         }
//     }

//     useEffect(() => {
//         fetchData();
//   }, []);


    return (
        <form onSubmit={handleSubmit}>
            <div className="form-control" >
                <label>Task</label>
                <input
                required
                type="text"
                placeholder="Add Task"
                value={name}
                onChange={handleTaskChange}
                />
            </div>
            <div className="form-control">
                <label>Day</label>
                <input
                id="day-input"
                required
                type="date"
                placeholder="Add Due Date"
                value={due_date}
                onChange={handleDueDateChange}/>
            </div>
            <div className='center'>
                <input  type="submit" value='Save Task' id="submit-btn" />
            </div>
        </form>
    )
}
export default AddTask
