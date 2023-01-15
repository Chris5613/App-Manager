import { useState } from 'react'

const Toggle = ({ label, toggled, onClick }) => {
    const [isToggled, toggle] = useState(false)

    const callback = () => {
        toggle(!isToggled)
        onClick(!isToggled)
    }

    return (
        <label className='label'>
            <input className='input' type="checkbox" defaultChecked={isToggled} onClick={callback} text="no"/>
            <span className='span'></span>
            <strong className='strong'>{label}</strong>
        </label>
    )
}
export default Toggle
