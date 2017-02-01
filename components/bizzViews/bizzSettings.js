import React from 'react'
import header from '../header'

module.exports = (state, dispatch) => {
  console.log({state});
  function requestHandler() {
    switch (state.bizz.settings.follow_requests.length) {
      case 1:
        return <h1>1 Request</h1>
      case 0:
        return <h1>No Requests</h1>
      default:
        return <h1>{state.bizz.settings.follow_requests.length} Requests</h1>
    }
  }
  return <div className="BizzSettings">
    <h1 className="bizzListItem" onClick={() => dispatch({type: "CHANGE_BIZZ_VIEW", payload: 'followRequestsView'})}>{requestHandler()}</h1>

  </div>
}
