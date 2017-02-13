import React from 'react'
import requestEvents from '../../services/requestEvents'
import requestPosts from '../../services/requestPosts'
// import requestEvents from './services/requestEvents'

module.exports = (state, dispatch) => {
  return <div className="header">
    <nav>
      <span onClick={() => requestEvents(state, dispatch)}>Events </span>
      <span onClick={() => requestPosts(state, dispatch)}>Posts </span>
      <span onClick={() => dispatch({type: 'CHANGE_VIEW', payload: 'people'})}>Events </span>
    </nav>
  </div>

}
