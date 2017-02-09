import React from 'react'

module.exports = (state, dispatch) => {
  console.log("render header");
  return <div className="header">
    <nav>
      <span onClick={() => dispatch({type: 'CHANGE_VIEW', type: 'events'})}>Events</span>
      <span onClick={() => dispatch({type: 'CHANGE_VIEW', type: 'posts'})}>Posts</span>
      <span onClick={() => dispatch({type: 'CHANGE_VIEW', type: 'people'})}>Events</span>
    </nav>
  </div>

}
