import React from 'react'
import requestEvents from '../../services/requestEvents'
import requestPosts from '../../services/requestPosts'
import requestGroups from '../../services/requestGroups'

module.exports = (state, dispatch) => {
  return <div className="header">
    <nav>
      <span className="navItem" onClick={() => requestEvents(state, dispatch)}>Events </span>
      <span className="navItem" onClick={() => requestPosts(state, dispatch)}>Posts </span>
      <span className="navItem" onClick={() => requestGroups(state, dispatch)}>Groups</span>
    </nav>
  </div>
}
