import propTypes from 'prop-types' 

const Button = ({color,text,onClick}) => {
  return <button onClick={onClick} 
  style={{backgroundColor: color}}
  className='btn'>{text}</button>
}


Button.propTypes = {
    text: propTypes.string,
    color: propTypes.string,
    onClick: propTypes.func,
}


export default Button
