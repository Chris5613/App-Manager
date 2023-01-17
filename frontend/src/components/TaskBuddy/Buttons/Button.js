const Button = ({text, onClick}) => {

    return (
        <div className="center">
            <button
            className = "btn"
            onClick = {onClick}>
            {text}
            </button>
        </div>
    )
}

export default Button
