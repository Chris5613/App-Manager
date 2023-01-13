import { useState } from "react"
import Body from './components/Body'
import Tasks from './components/Tasks'
import AddTask from "./components/AddTask"


function App() {

  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState(
    [
        {
            id:1,
            text: "Food Shopping",
            day: "Jan 23 2023",
        },
    ]
)
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id,...task}
    setTasks([...tasks, newTask])
  }


  const deleteTask = (id) =>{
    setTasks(tasks.filter((task) => task.id !== id))
  }


  return (
    <div className="app">
      <Body
      onAdd={() =>
      setShowAddTask(!showAddTask)}
      showAddTask={showAddTask}/>
      {showAddTask &&
      <AddTask
      onAdd={addTask}
      />}
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} />
      ) : (
        <p id="center-text">You got no task</p>
        )}
    </div>
  );
}

export default App;
