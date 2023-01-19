import { useState } from "react";
import AddTask from "../TaskBuddy/Task/AddTask";
import Tasks from "../TaskBuddy/Task/Tasks";
import Body from '../TaskBuddy/Tags/Body'
import Footer from "./Tags/Footer";


function TaskBuddy() {
    const [showAddTask, setShowAddTask] = useState(false);
    const [tasks, setTasks] = useState([]);


    const deleteTask = async (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return (
        <div className="taskapp">
        <Body
            onAdd={() => setShowAddTask(!showAddTask)}
            showAddTask={showAddTask}
        />
        {showAddTask && <AddTask o />}
        <Tasks tasks={tasks} onDelete={deleteTask} />
        <Footer />
        </div>
    );
}

export default TaskBuddy
