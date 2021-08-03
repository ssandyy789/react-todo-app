// import PropTypes from 'prop-types';
import Button from "./Button";

const Header = ({heading, onAdd, showAdd}) => {
    // const onClick = () => {
    //     alert('hello');
    // }
    return (
        <header className='header'>
            {/* <h1 style={{color:'red'}}>{heading}</h1> */}
            <h1>{heading}</h1>
            <Button onClick={onAdd} color={showAdd ? 'orange' : 'green'} text={showAdd ? 'Close' : 'Add'} />
            {/* <Button onClick={onClick} color='purple' text='Add' /> */}
            {/* <Button color='orange' text='Remove' /> */}
        </header>
    )
}

Header.defaultProps = {
    heading: 'Task Tracker',
}

/*    CSS in JS     */
// const headStyle = {
//     color : 'red',
//     backgroundColor : 'green'
// }

export default Header
