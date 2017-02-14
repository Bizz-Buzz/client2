import React from 'react'

module.exports = (state, dispatch) => {
  return <div className="createPost">
    <input type="text" placeholder="content"/>
    <button >Post</button>
    <button onClick={() => dispatch({type: 'TOGGLE', payload: 'createPostToggle'})}>Cancel</button>
  </div>
}
