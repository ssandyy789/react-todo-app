import React from 'react'
import { useState } from 'react'

const AddTask = ({onAdd}) => {

    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text){
            alert('please add your work..!');
            return
        }

        onAdd({text, day, reminder});

        setText('')
        setDay('')
        setReminder(false)


    }
    
    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Add Task</label>
                <input type="text" placeholder="Add Task"  value={text} onChange={(e) => setText(e.target.value)}  />
            </div>
            <div className="form-control">
                <label>Schedule Date And Time</label>
                <input type="datetime-local" value={day} onChange={(e) => setDay(e.target.value)} required/>
            </div>
            <div className="form-control-check">
                <label > Set Remainder ?</label>
                <input type="checkbox" checked={reminder} value={reminder}  onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>
                <input  className="btn btn-block" type="submit" value="submit" />
        </form>
    )
}

export default AddTask
