import { useState } from "react";
import TaskBuddy from "./components/TaskBuddy/TaskBuddy";
import SkyScope from "./components/SkyScope/SkyScope";
import Toggle from "./components/TaskBuddy/Buttons/Toggle";


function App() {
  const [toggle, setToggle] = useState(true);

  let content;
  if (toggle === false) {
    content = <TaskBuddy />;
  }
  else if (toggle === true) {
    content = ( <div className="app"> <SkyScope /></div>);
  }
  return (
    <>
      {content}
      <Toggle setToggle={setToggle} toggle={toggle} />
    </>
  );
}
export default App;
