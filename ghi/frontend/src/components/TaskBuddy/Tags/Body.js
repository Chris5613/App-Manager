import Button from '../Button'
import Toggle from '../Toggle'

const Body = ({title, onAdd, showAddTask,}) => {

    const logState = state => {
        console.log("Toggled:", state)
    }

    return (
    <main className="center">
        <h1 className ="title">{title} <i class="fa-solid fa-list-check"></i></h1>
        <Toggle
        toggled={true}
        onClick={logState}
        />
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
