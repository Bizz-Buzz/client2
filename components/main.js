import React from 'react'
import renderEvents from './views/events'
import renderCreateEvent from './views/createEvent'
import renderPosts from './views/posts'
import renderGroups from './views/groups'
import renderFindGroup from './views/findGroup'
import renderAdmin from './views/admin'
import renderRequestLeave from './views/requestLeave'
import renderEmergencyReport from './views/emergencyReport'
import renderMessageAdmin from './views/messageAdmin'
import renderAdminSuccess from './views/adminSuccess'
import renderGroupAdmin from './views/groupAdmin'
import header from './views/header'

module.exports = ({ state, dispatch }) => {
  console.log({state});
  function viewHandler() {
    switch (state.view) {
      case 'events':
        return renderEvents(state, dispatch)
      case 'posts':
        console.log("render posts");
        return renderPosts(state, dispatch)
      case 'groups':
        return renderGroups(state, dispatch)
      case 'findGroup':
        return renderFindGroup(state, dispatch)
      case 'admin':
        return renderAdmin(state, dispatch)
      case 'requestLeave':
        return renderRequestLeave(state, dispatch)
      case 'emergency':
        return renderEmergencyReport(state, dispatch)
      case 'messageAdmin':
        return renderMessageAdmin(state, dispatch)
      case 'adminSuccess':
        return renderAdminSuccess(state, dispatch)
      case 'groupAdmin':
        return renderGroupAdmin(state, dispatch)
      default:
        return renderEvents(state, dispatch)
    }
  }

  return <div>
    {header(state, dispatch)}
    <div className="contentDiv">
      {viewHandler()}
    </div>
  </div>
}
