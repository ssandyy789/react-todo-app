import React from 'react'
import Task from './Task'

const Tasks = ({tasks}) => {
    return (
        <>   
            {tasks.map((task)=> (
            <Task key={task.id} task={task} />))}
        </>
    )
}



// const Tasks = () => {
//     const tasks = [
//         {
//             id: 1,
//             text: 'Gym',
//             day: 'feb 5th at 9:00am',
//             remainder: true,
//         },
//         {
//             id: 2,
//             text: 'Doctor Appointment',
//             day: 'feb 5th at 11:00am',
//             remainder: true,
//         },
//         {
//             id: 3,
//             text: 'Party lunch',
//             day: 'feb 5th at 2:00pm',
//             remainder: true,
//         },
//         {
//             id: 4,
//             text: 'Cruise ferry',
//             day: 'feb 5th at 5:00pm',
//             remainder: true,
//         }
//     ]
    
//     return (
//         <>   
//             {/* {tasks.map((task)=> (<h3>{task.id + ' ' + task.text +' ' +task.day}</h3>))} */}
//             {tasks.map((task)=> (<h3 key={task.id}>{task.text +' -->' +task.day}</h3>))}
//         </>
//     )
// }

export default Tasks
