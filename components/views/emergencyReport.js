import React from 'react'


module.exports = (state, dispatch) => {
  return <div className="groups">
    <button className="toggleButton" onClick={() => dispatch({type: 'CHANGE_VIEW', payload: 'admin'})}>Back</button>
    <div>
      Emergency Reporting
    </div>
  </div>
}
