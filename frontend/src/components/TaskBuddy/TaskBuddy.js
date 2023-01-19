import { useState } from "react";
import AddTask from "../TaskBuddy/Task/AddTask";
import GetTask from "../TaskBuddy/Task/GetTask";
import Body from '../TaskBuddy/Tags/Body'
import Footer from "./Tags/Footer";


function TaskBuddy() {
    const [showAddTask, setShowAddTask] = useState(false);

    return (
        <div className="taskapp">
        <Body
            onAdd={() => setShowAddTask(!showAddTask)}
            showAddTask={showAddTask}
        />
        {showAddTask && <AddTask o />}
        <GetTask />
        <Footer />
        </div>
    );
}

export default TaskBuddy
