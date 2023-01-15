import { useState } from 'react'

const Toggle = ({ label}) => {
    const [isToggled, toggle] = useState(false)

    const callback = () => {
        toggle(!isToggled)
    }

    return (
        <label className='label'>
            <input className='input' type="checkbox" defaultChecked={isToggled} onClick={callback} />
            <span className='span'></span>
            <strong className='strong'>{label}</strong>
        </label>
    )
}
export default Toggle
