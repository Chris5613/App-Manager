
const Icons = ({description}) => {

    let icon
    if(description === "Clouds") {
        icon = <img src= "https://cdn-icons-png.flaticon.com/512/984/984548.png" alt = "icon"width="85" height="75"/>
    }
    else if(description ==="Mist") {
        icon = <img src= "https://dannyruda.github.io/weather-app/f6e2425b137a128bf117.svg" alt = "icon"width="85" height="75"/>
    }
    else if(description === "Clear") {
        icon = <img src="https://cdn-icons-png.flaticon.com/512/3428/3428687.png" alt = "icon"width="85" height="75"/>
    }
    else if(description === "Rain") {
        icon = <img src="https://thenounproject.com/api/private/icons/217566/edit/?backgroundShape=SQUARE&backgroundShapeColor=%23000000&backgroundShapeOpacity=0&exportSize=752&flipX=false&flipY=false&foregroundColor=%23000000&foregroundOpacity=1&imageFormat=png&rotation=0&token=gAAAAABjxfm-eTke9RrrrZWSaKIhqFFGiNntC-ZxZV9GunQxTB18FNWelB4UO3QDdxwSt6hssNPU93aIkV9cEtKQP1Ap3PtMkw%3D%3D" alt = "icon"width="85" height="75"/>
    }
    else if(description === "Snow") {
        icon = <img src="https://cdn-icons-png.flaticon.com/512/9361/9361585.png" alt = "icon"width="85" height="75"/>
    }

    return (
        <div>
            {icon}
        </div>
    )
}

export default Icons
