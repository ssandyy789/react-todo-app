import Button from "./Button"

const Header = ({heading}) => {
    const onClick = () => {
        alert('hello');
    }
    return (
        <header className='header'>
            {/* <h1 style={headStyle}>{heading}</h1> */}
            <h1>{heading}</h1>
            <Button onClick={onClick} color='green' text='Add' />
            <Button color='orange' text='Remove' />
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
