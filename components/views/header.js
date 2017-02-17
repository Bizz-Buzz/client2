import React from 'react'
import requestEvents from '../../services/requestEvents'
import requestPosts from '../../services/requestPosts'
// import requestEvents from './services/requestEvents'

module.exports = (state, dispatch) => {
  return <div className="header">
    <nav>
      <span className="navItem" onClick={() => requestEvents(state, dispatch)}>Events </span>
      <span className="navItem" onClick={() => requestPosts(state, dispatch)}>Posts </span>
      <span className="navItem" onClick={() => dispatch({type: 'CHANGE_VIEW', payload: 'people'})}>Events </span>
    </nav>
  </div>

}
