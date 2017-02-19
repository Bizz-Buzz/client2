import React from 'react'
import signupService from '../services/signup'

module.exports = ({ state, dispatch }) => {
  const savePassword = (e) => dispatch({type: 'UPDATE_SIGNUP_DETAILS', payload: {change: 'password', value: e.target.value}})
  const saveConfirmPassword = (e) => dispatch({type: 'UPDATE_SIGNUP_DETAILS', payload: {change: 'confirmPassword', value: e.target.value}})
  const saveEmail = (e) => dispatch({type: 'UPDATE_SIGNUP_DETAILS', payload: {change: 'email', value: e.target.value}})
  const saveFirstName = (e) => dispatch({type: 'UPDATE_SIGNUP_DETAILS', payload: {change: 'first_name', value: e.target.value}})
  const saveLastName = (e) => dispatch({type: 'UPDATE_SIGNUP_DETAILS', payload: {change: 'last_name', value: e.target.value}})
  const authorizeSignUp = (e) => {
    e.preventDefault()
    signupService(state.signupDetails, dispatch)
  }
  return (
    <div className='signUp'>
      <div className='headingDiv'>
        <h1 className="mainHeading">CREATE ACCOUNT</h1>
      </div>
      <form>
        {state.authError ? <p className="authErrorMsg" >{state.authError}</p> : ""}
        <div className="accInputDiv">
          <input className="detsInput" onChange={saveEmail} type='text' placeholder='Email' />
          <input className="detsInput" onChange={savePassword} type='password' placeholder='Password' />
          <input className="detsInput" onChange={saveConfirmPassword} type='password' placeholder='Confirm Password' />
          <input className="detsInput" onChange={saveFirstName} type='text' placeholder="First Name" />
          <input className="detsInputLast" onChange={saveLastName} type="text" placeholder="Last Name" />
        </div>
        <button className='bigButton' onClick={authorizeSignUp} type='submit'>Sign Up</button>
      </form>
      <button className='smallButton' onClick={() => dispatch({type: 'CHANGE_ROUTE', payload: '/'})} type='submit'>Cancel</button>
    </div>
  )
}
