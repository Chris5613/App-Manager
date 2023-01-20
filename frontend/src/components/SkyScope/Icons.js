

const Icons = ({description}) => {

    let icon
    switch(description){
        case 'Mist':
        case 'Clouds':
            icon = <img src= "https://cdn-icons-png.flaticon.com/512/984/984548.png" alt = "icon" width="85" height="75"/>
            document.getElementsByClassName("app")[0].style.background="linear-gradient(rgb(161, 164, 165) 0%, rgb(161, 164, 165) 20%, rgb(85, 85, 82) 100%)"
            document.body.style.backgroundImage = "url('https://i.gyazo.com/9722ecf770f857942f0ae8b85f7a41af.jpg')"
            break
        case 'Clear':
            icon = <img src="https://cdn-icons-png.flaticon.com/512/3428/3428687.png" alt = "icon"width="85" height="75"/>
            document.getElementsByClassName("app")[0].style.background="linear-gradient(rgb(144, 189, 231) 0%, rgb(144, 189, 231) 20%, rgb(209, 220, 138) 100%)";
            document.body.style.backgroundImage = "url('https://i.gyazo.com/8219e20c45291cebd1e939717ae492df.jpg')"
            break
        case 'Rain':
            icon = <img src="https://cdn-icons-png.flaticon.com/512/2060/2060846.png" alt = "icon"width="85" height="75"/>
            document.body.style.backgroundImage = "url('https://i.gyazo.com/96f01ab0bc36908c91894179526564a7.jpg')"
            document.getElementsByClassName("app")[0].style.background="linear-gradient(rgb(74, 90, 72) 0%, rgb(74, 90, 72) 20%, rgb(85, 85, 82) 100%)"
            break
        case 'Snow':
            icon = <img src="https://cdn-icons-png.flaticon.com/512/9361/9361585.png" alt = "icon"width="85" height="75"/>
            document.getElementsByClassName("app")[0].style.background="linear-gradient(rgb(226, 232, 237) 0%, rgb(226, 232, 237) 20%, rgb(117, 116, 113) 100%)"
            document.body.style.backgroundImage = "url('https://i.gyazo.com/5c0e14d3ce57a72890a4624c4ffd4440.jpg')"
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
