import React from 'react'
import renderEvents from './views/events'
import renderCreateEvent from './views/createEvent'
import renderPosts from './views/posts'
import renderGroups from './views/groups'
import renderFindGroup from './views/findGroup'
import renderCommunication from './views/communication'
import renderAnnualLeave from './views/annualLeave'
import renderSickLeave from './views/sickLeave'
import renderEmergencyReport from './views/emergencyReport'
import renderMessageAdmin from './views/messageAdmin'
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
      case 'communication':
        return renderCommunication(state, dispatch)
      case 'annualLeave':
        return renderAnnualLeave(state, dispatch)
      case 'sickLeave':
        return renderSickLeave(state, dispatch)
      case 'emergency':
        return renderEmergencyReport(state, dispatch)
      case 'messageAdmin':
        return renderMessageAdmin(state, dispatch)
      default:
        return renderEvents(state, dispatch)
    }
  }

  return <div>
    {header(state, dispatch)}
    {viewHandler()}
  </div>
}
