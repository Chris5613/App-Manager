import Button from './Button'

const Header = ({title, onAdd, showAddTask,}) => {

    // Write code for Edit Button
    return (
    <main className="center">
        <h1 className ="title">{title} <i class="fa-solid fa-list-check"></i></h1>
        <h4 className ="title">Hello , User. Logout</h4>
        <Button
        id="task-btn"
        text={showAddTask ? 'Close' : 'Add Task'}
        onClick={onAdd}/>
    </main>
    )
}

Header.defaultProps = {
    title: "Task Buddy",
}

export default Header
