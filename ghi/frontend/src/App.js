import { useState } from "react"
import Body from './components/TaskBuddy/Tags/Body'
import Tasks from './components/TaskBuddy/Task/Tasks'
import AddTask from "./components/TaskBuddy/Task/AddTask"


function TaskBuddy() {
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
        <p id="footer-text"> <strong>Copyright © Chris 2023</strong></p>
      </footer>
      </>
  );
}

function App() {

  let content;
  let number = 6
  if(number === 0) {
    content = <p>hello</p>
  }
  else {
    content = <TaskBuddy />
  }

  return (
      <>
        {content}
      </>
  );
}

export default App;
