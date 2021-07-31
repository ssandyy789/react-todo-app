import React from 'react'


const Button = ({color, text, onClick}) => {
    return (
        <button style={{backgroundColor: color}} onClick={onClick}  className='btn' type="btn">{text}</button>
        
    )
}

export default Button
