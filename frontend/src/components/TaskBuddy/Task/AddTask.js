import {useState} from 'react'

const AddTask = ({onAdd}) => {
    const [text,setText] = useState('')
    const [day,setDay] = useState('')

    const onSubmit = (event) => {
        event.preventDefault()
        onAdd({text, day})
        setText("")
        setDay("")
    }
    return (
        <form onSubmit={onSubmit}>
            <div className="form-control" >
                <label>Task</label>
                <input
                required
                type="text"
                placeholder="Add Task"
                value={text}
                onChange={(event) => setText(event.target.value)}
                />
            </div>
            <div className="form-control">
                <label>Day</label>
                <input
                id="day-input"
                required
                type="date"
                placeholder="Add Due Date"
                value={day}
                onChange={(event) => setDay(event.target.value)}/>
            </div>
            <div className='center'>
                <input  type="submit" value='Save Task' id="submit-btn" />
            </div>
        </form>
    )
}
export default AddTask
