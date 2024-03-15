import React from 'react'
import {useNavigate} from 'react-router-dom'
const App = () => {
  const navigate = useNavigate()
 
  return (
    <div>
      <div>Home page</div>
      <button onClick={() => navigate('/aboutUs') }>Go to aboutUs page</button>
    </div>
  )
}

export default App;