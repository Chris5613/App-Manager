import Button from '../Buttons/Button'
import SignupForm from '../UserAuth/SignupForm';
import { useState } from "react"


const SignupButton = () => {

  const [showSignupForm, setShowSignupForm] = useState(false)

    const onClick = (e) => {
      setShowSignupForm(!showSignupForm)
    }

  return (
    <>
    <div id="signup-btn">
      <Button onAdd={() =>
      setShowSignupForm(!showSignupForm)}
      showSignupForm={showSignupForm}
      onClick={onClick}
      className ="btn"
      text={showSignupForm ? 'Close' : "User Signup"}
      />
      {showSignupForm &&
      <SignupForm />
      }
    </div>
    </>
  )
}

export default SignupButton
