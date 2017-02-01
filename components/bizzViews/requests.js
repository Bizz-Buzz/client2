import React from 'react'
import header from '../header'
import AcceptResponse from '../../services/acceptResponse'


module.exports = (state, dispatch) => {
  function toggleReponse(request) {
    if (state.bizz.settings.selectedRequest == request.request_id) {
      return <div className="respondRequest">
        <button>Reject</button>
        <button onClick={() => AcceptResponse(request.request_id, state, dispatch)}>Accept</button>
      </div>
    } else {
      <h4>Requested to join {state.bizz.bizz_name}</h4>
    }
  }
  function listRequest(request) {
    return <div className="bizzListItem" onClick={() => dispatch({type: "SELECT_REQUEST", payload: request.request_id})}>
      <h3>{request.first_name} {request.last_name}</h3>
      {toggleReponse(request)}
    </div>
  }
  function listRequests() {
    return state.bizz.settings.follow_requests.map((request) => {
      return listRequest(request)
    })
  }
  return <div className="BizzSettings">
    <h1>requests</h1>
    <div className="followRequests">
      {listRequests()}
    </div>
  </div>
}
