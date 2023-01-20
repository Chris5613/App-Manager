



const Toggle = ({ toggle, setToggle}) => {

    function onToggle() {
        document.body.style.backgroundImage ='none'
        setToggle(!toggle)
    }



    return (
        <label className='label'>
            <input className='input' type="checkbox" defaultChecked={false} onClick={() => onToggle()} />
            <span className='span'></span>
        </label>
    )
}
export default Toggle
