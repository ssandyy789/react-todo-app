import React from 'react';
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import { useState } from 'react';



/*    ARROW FUNCTION   */
const App = () => {  
  const [showAddtask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([
    
    {
    id: 1,
    text: 'Gym',
    day: 'feb 5th at 9:00am',
    reminder: false,
},
{
    id: 2,
    text: 'Doctor Appointment',
    day: 'feb 5th at 11:00am',
    reminder: false,
},
{
    id: 3,
    text: 'Party Lunch',
    day: 'feb 5th at 2:00pm',
    reminder: false,
},
{
    id: 4,
    text: 'Cruise Ferry',
    day: 'feb 5th at 5:00pm',
    reminder: false,
}
])


const taskReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder}  : task ))  
}

const deleteTask  = (id) => {
  setTasks(tasks.filter((task) => task.id !== id));
  // console.log('delete', id);
  }

const addTask = (task) => {
  // console.log(task);
  const id = Math.floor(Math.random()*1000)+1;
  const newTask = {id, ...task}
  setTasks([...tasks, newTask])
}



  return (
      <div className="container">
        <Header onAdd = {() => setShowAddTask(!showAddtask)}  showAdd={showAddtask} />
        {showAddtask && <AddTask  onAdd={addTask}/>}
        {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={taskReminder} /> : 'No task to show.., please add some..!'}        
      </div>
  )
}


/*    NORMAL FUNCTION    */

// function App() {  
//   return (
//       <div className="container">
//         <Header />              
//       </div>
//   );
// }

/*     CLASS FUNCTION   */

// class App extends React.Component { 
//   render(){  
//   return (
//       <div className="container">
//         <Header />              
//       </div>
//   );
//   }
// }

export default App;
