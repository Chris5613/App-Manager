import Button from '../Buttons/Button'
import Form from './Form'
import { useState } from "react"


const Nav = () => {
  const [showLoginForm, setShowLoginForm] = useState(false)

  const onClick = () => {
    setShowLoginForm(!showLoginForm)
  }
  return (
    <nav >
        <ul>
          <Button onAdd={() =>
          setShowLoginForm(!showLoginForm)}
          showLoginForm={showLoginForm}
          onClick ={onClick}
          text={showLoginForm ? 'Close' : 'User Login'}/>
          {showLoginForm &&
          <Form />
          }
        </ul>
    </nav>
  )
}
export default Nav
