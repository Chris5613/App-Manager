import { useState } from "react" // add useEffect for APIs
import Body from './components/TaskBuddy/Tags/Body'
import Tasks from './components/TaskBuddy/Task/Tasks'
import AddTask from "./components/TaskBuddy/Task/AddTask"
// import Footer from './components/Tags/Footer'


function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  const addTask = async (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id,...task}
    setTasks([...tasks, newTask])
  }

  const deleteTask = async (id) =>{
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
      <>
      <Body onAdd={() => setShowAddTask(!showAddTask)}
      showAddTask={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      <Tasks tasks={tasks} onDelete={deleteTask} />
      <footer>
        <p id="footer-text"> <strong>Copyright © 2023 V1</strong></p>
      </footer>
      </>
  );
}

export default App;
