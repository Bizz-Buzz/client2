import React from 'react'


module.exports = (state, dispatch) => {
  return <div className="emergencyDiv">
    <div>
      Emergency Reporting
    </div>
    <button className="toggleButton" onClick={() => dispatch({type: 'CHANGE_VIEW', payload: 'communication'})}>Back</button>
  </div>
}
