

const Task = ({task, onDelete}) => {
    return (
        <div className="task">
            <h3>{task.text}
            <i className="fa-solid fa-x delete" onClick={() => onDelete(task.id)}></i></h3>
            <p>Due: {task.day}</p>
        </div>
    )
}

export default Task
