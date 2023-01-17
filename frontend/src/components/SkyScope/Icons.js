const Icons = ({description}) => {

    let icon
    switch(description){
        case 'Mist':
        case 'Clouds':
            icon = <img src= "https://cdn-icons-png.flaticon.com/512/984/984548.png" alt = "icon" width="85" height="75"/>
            document.getElementsByClassName("app")[0].style.background="linear-gradient(rgb(161, 164, 165) 0%, rgb(161, 164, 165) 20%, rgb(85, 85, 82) 100%)"
            break
        case 'Clear':
            icon = <img src="https://cdn-icons-png.flaticon.com/512/3428/3428687.png" alt = "icon"width="85" height="75"/>
            document.getElementsByClassName("app")[0].style.background="linear-gradient(rgb(144, 189, 231) 0%, rgb(144, 189, 231) 20%, rgb(209, 220, 138) 100%)";
            break
        case 'Rain':
            icon = <img src="https://thenounproject.com/api/private/icons/217566/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0&token=gAAAAABjxfm-eTke9RrrrZWSaKIhqFFGiNntC-ZxZV9GunQxTB18FNWelB4UO3QDdxwSt6hssNPU93aIkV9cEtKQP1Ap3PtMkw%3D%3D" alt = "icon"width="85" height="75"/>
            document.getElementsByClassName("app")[0].style.background="linear-gradient(rgb(74, 90, 72) 0%, rgb(74, 90, 72) 20%, rgb(85, 85, 82) 100%)"
            break
        case 'Snow':
            icon = <img src="https://cdn-icons-png.flaticon.com/512/9361/9361585.png" alt = "icon"width="85" height="75"/>
            document.getElementsByClassName("app")[0].style.background="linear-gradient(rgb(226, 232, 237) 0%, rgb(226, 232, 237) 20%, rgb(117, 116, 113) 100%)"
            break
        default:
            document.getElementsByClassName("app")[0].style.background="linear-gradient(rgb(226, 232, 237) 0%, rgb(226, 232, 237) 20%, rgb(117, 116, 113) 100%)"
            break
    }

    return (
        <div>
            {icon}
        </div>
    )
}

export default Icons
