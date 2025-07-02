import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignupForm from './SignupForm'
import SignupUsingReactHookForm from './SignupUsingReactHookForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <SignupForm /> */}
      <SignupUsingReactHookForm />
    </>
  )
}

export default App
