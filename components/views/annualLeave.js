import React from 'react'


module.exports = (state, dispatch) => {
  return <div className="groups">
    <div>
      Annual Leave
    </div>
    <button onClick={() => dispatch({type: 'CHANGE_VIEW', payload: 'communication'})}>Back</button>
  </div>
}
