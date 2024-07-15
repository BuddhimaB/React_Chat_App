import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='auth'>
      <h1>Register </h1>
      <form>
          <input type='text' placeholder='username' id='username' />
          <input type='password' placeholder='password' />
          <button type='submit'>Register</button>
          <p>This is an error!</p>
          <span> 
            Do have an account? 
            <Link to='/register'>Register</Link>

          </span>
      </form>
      
      
      </div>
  )
}

export default Register