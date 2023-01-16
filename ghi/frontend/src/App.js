import { useState } from "react"
import Body from './components/TaskBuddy/Tags/Body'
import Tasks from './components/TaskBuddy/Task/Tasks'
import AddTask from "./components/TaskBuddy/Task/AddTask"
import Toggle from "./components/TaskBuddy/Buttons/Toggle"


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

function SkyScope() {

  return(
    <p>hello</p>
  )
}

function App() {

  const [toggle , setToggle] = useState(false)

  let content
  if(toggle === false) {
    content = <TaskBuddy />
  }
  else if(toggle === true) {
    content = <SkyScope />
  }

  return (
      <>
        {content}
        <Toggle setToggle={setToggle}
        toggle={toggle}
        />
      </>
  );
}

export default App;
