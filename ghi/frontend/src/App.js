import { useState } from "react" // add useEffect for APIs
import Body from './components/Body'
import Tasks from './components/Tasks'
import AddTask from "./components/AddTask"
import Footer from './components/Footer'


function App() {

  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])


  // useEffect(() => {
  //   const getTask = async () => {
  //     const tasksFromServer = await fetchTasks()
  //     setTasks(tasksFromServer)
  //   }
  //   getTask()
  // }, [])


  // const fetchTasks =  async () => {
  //   const response = await fetch() // enter api URL

  //   if(response.ok){
  //     const data = response.json()
  //   }
  //   else{
  //     console.error("Bad Response")
  //   }
  // }

  const addTask = async (task) => {
    // const response = await fetch(    , {
    //   method: 'POST',
    //   headers: {
    //     'Content-type': 'application/json'
    //   },
    //   body: JSON.stringify(task)
    // })// localhost/task

    // const data = await response.json()

    // setTasks([...tasks, data])


    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id,...task}
    setTasks([...tasks, newTask])
  }


  const deleteTask = async (id) =>{
    // await fetch({// URL '8000/tasks/${id}',
    //   method: 'DELETE'
    // })

    setTasks(tasks.filter((task) => task.id !== id))
  }


  return (

      <>
      <Body onAdd={() => setShowAddTask(!showAddTask)}
      showAddTask={showAddTask}/>
      {showAddTask &&
      <AddTask
      onAdd={addTask}
      />}
      <Tasks tasks={tasks} onDelete={deleteTask} />
      <Footer />
      </>
  );
}

export default App;
