import React from 'react'
import loginService from '../services/login'

module.exports = ({state, dispatch}) => {
  const goToSignUp = () => dispatch({type: 'CHANGE_ROUTE', payload: '/signUp'})
  const saveEmail = (e) => dispatch({type: 'UPDATE_LOGIN_DETAILS', payload: {change: 'username', value: e.target.value}})
  const savePassword = (e) => dispatch({type: 'UPDATE_LOGIN_DETAILS', payload: {change: 'password', value: e.target.value}})
  const loginButton = (e) => {
    e.preventDefault()
    loginService(state, dispatch)
  }
  return (
    <div>
      <div className="headingDiv">
        <h1 className="mainHeading">LOGIN</h1>
        <p className="subHeading">Welcome to bizzBuzz</p>
      </div>
        <form>
          {state.authError ? <h1>{state.authError}</h1> : ""}
          <div className="accInputDiv">
            <input className="accDetsInput" onChange={saveEmail} type="text" placeholder="Email Address" />
            <input className="accDetsInputLast" onChange={savePassword} type="password" placeholder="Password" />
          </div>
          <button className="bigButton" onClick={loginButton} type="submit">LOGIN</button>
        </form>
        <button className='smallButton' onClick={goToSignUp}>Create Account</button>
    </div>
  )
}
