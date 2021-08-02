import React from 'react';
import * as Icon from 'react-feather'
import * as Icon2 from "react-icons/fa";
import * as Icon3 from "react-icons/fc";


const Task = ({task, onDelete, onToggle}) => {

    return (
        <div className='task' >
            {/* <h3>{task.text} {<Icon3.FcAddColumn />} {<Icon2.FaEdit color='' />} {<Icon.Trash style={{color:'red'}} />} </h3> */}
            <div className="display-flex" onDoubleClick={() => onToggle(task.id)}>
            <h3>{task.text} </h3>
            <p style={rightFloat}>
                {<Icon.Eye  />} 
                {<Icon.Edit />} 
                {<Icon.Trash onClick={() =>  onDelete(task.id)} />}
            </p>
            <h5>{task.day}</h5>
            </div>
        </div>
    )
    }




const  rightFloat = {
    float:'right'
}

export default Task
