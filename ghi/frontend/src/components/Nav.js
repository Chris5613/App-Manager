import Button from './Button'
import LoginForm from './LoginForm'
import { useState } from "react"


const Nav = () => {

  const [showLoginForm, setShowLoginForm] = useState(false)

    const onClick = (e) => {
        setShowLoginForm(!showLoginForm)
    }

  return (
    <nav className="navbar">
        <ul id="nav-btn">
          <Button onAdd={() =>
          setShowLoginForm(!showLoginForm)}
          showLoginForm={showLoginForm}
          onClick ={onClick}
          text={showLoginForm ? 'Close' : 'User Login'}/>
          {showLoginForm &&
          <LoginForm />
          }
        </ul>
    </nav>
  )
}
export default Nav
