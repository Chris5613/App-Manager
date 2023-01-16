const Header = ({title}) => {
    return (
        <h1 className ="title">{title} <i className="fa-sharp fa-solid fa-sun"></i></h1>
    )
}

Header.defaultProps = {
    title: "Sky Scope",
}


export default Header
