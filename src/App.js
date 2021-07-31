import React from 'react';
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';


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


/*    ARROW FUNCTION   */
const App = () => {  
  document.title = 'Tast-Tracker';

  const [tasks, setTasks] = useState([
    {
    id: 1,
    text: 'Gym',
    day: 'feb 5th at 9:00am',
    remainder: true,
},
{
    id: 2,
    text: 'Doctor Appointment',
    day: 'feb 5th at 11:00am',
    remainder: true,
},
{
    id: 3,
    text: 'Party Lunch',
    day: 'feb 5th at 2:00pm',
    remainder: true,
},
{
    id: 4,
    text: 'Cruise Ferry',
    day: 'feb 5th at 5:00pm',
    remainder: true,
}]
);
  return (
      <div className="container">
        <Header />
        <Tasks tasks={tasks}/>            
      </div>
  )
}

export default App;
