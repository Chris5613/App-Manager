import Button from './Button'

const Header = ({title, onAdd, showAddTask,}) => {

    const onClick = (e) => {
        console.log('click')
    }
    // Write code for Edit Button
    return (
    <main>
        <h1 className ="title">{title}</h1>
        <h4 className ="title">Hello , User. Logout</h4>
        <Button
        text={showAddTask ? 'Close' : 'Add'}
        onClick={onAdd}/>
        <Button text="Edit" onClick={onClick}/>
    </main>
    )
}

Header.defaultProps = {
    title: "To Do List",
}

export default Header
