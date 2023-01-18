import Button from '../Buttons/Button'


const Body = ({onAdd, showAddTask,}) => {
    return (
    <main className="center">
        <h1>Task Buddy <i className="fa-solid fa-list-check"></i></h1>
        <div>
            <Button
            text={showAddTask ? 'Close' : 'Add Task'}
            onClick={onAdd}/>
        </div>
    </main>
    )
}
export default Body
