import PropTypes from 'prop-types'

const Button = ({text, onClick}) => {

    return (
        <div className="center">
            <button
            className = "btn"
            onClick = {onClick}
            >
                {text}
            </button>
        </div>
    )
}

Button.protoTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func,
}
export default Button
