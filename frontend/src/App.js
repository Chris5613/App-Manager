import { useState } from "react";
import Body from "./components/TaskBuddy/Tags/Body";
import Tasks from "./components/TaskBuddy/Task/Tasks";
import AddTask from "./components/TaskBuddy/Task/AddTask";
import Toggle from "./components/TaskBuddy/Buttons/Toggle";
import Footer from "./components/TaskBuddy/Tags/Footer";
import SkyBody from "./components/SkyScope/SkyBody";

function TaskBuddy() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  const addTask = async (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };
  const deleteTask = async (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  return (
    <div className="taskapp">
      <Body
        onAdd={() => setShowAddTask(!showAddTask)}
        showAddTask={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      <Tasks tasks={tasks} onDelete={deleteTask} />
      <Footer />
    </div>
  );
}

function SkyScope() {
  return (
    <>
      <SkyBody />
      <Footer />
    </>
  );
}

function App() {
  const [toggle, setToggle] = useState(false);

  let content;
  if (toggle === false) {
    content = <TaskBuddy />;
  } else if (toggle === true) {
    content = (
      <div className="app">
        <SkyScope />
      </div>
    );
  }
  return (
    <>
      {content}
      <Toggle setToggle={setToggle} toggle={toggle} />
    </>
  );
}
export default App;
