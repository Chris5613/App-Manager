import Button from './Button'

const Header = ({title, onAdd, showAddTask}) => {

    const onClick = (e) => {
        console.log('click')
    }

    return (
    <nav>
        <h1 className ="title">{title}</h1>
        <h4 className ="title">Hello , User. Logout</h4>
        <Button
        text={showAddTask ? 'Close' : 'Add'}
        onClick={onAdd}/>
        <Button text="Edit" onClick={onClick}/>
    </nav>
    )
}

Header.defaultProps = {
    title: "To Do List",
}

export default Header
