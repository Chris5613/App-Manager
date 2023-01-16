const Toggle = ({ label, toggle, setToggle}) => {

    return (
        <label className='label'>
            <input className='input' type="checkbox" defaultChecked={false} onClick={() => setToggle(!toggle)} />
            <span className='span'></span>
            <strong className='strong'>{label}</strong>
        </label>
    )
}
export default Toggle
