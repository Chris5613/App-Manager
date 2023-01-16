import Button from '../Buttons/Button'


const Body = ({title, onAdd, showAddTask,}) => {

    return (
    <main className="center">
        <h1 className ="title">{title} <i className="fa-solid fa-list-check"></i></h1>
        <div id="task-btn">
            <Button
            text={showAddTask ? 'Close' : 'Add Task'}
            onClick={onAdd}/>
        </div>
    </main>
    )
}

Body.defaultProps = {
    title: "Task Buddy",
}

export default Body
