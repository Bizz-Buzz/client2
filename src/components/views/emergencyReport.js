import React from 'react'


module.exports = (state, dispatch) => {
  return <div className="groups">
    <button className="goBackButton" onClick={() => dispatch({type: 'CHANGE_VIEW', payload: 'admin'})}>Go Back</button>
    <div>
      Emergency Reporting
    </div>

  </div>
}
