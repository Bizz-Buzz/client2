import React from 'react'

module.exports = (state, dispatch) => {
  function renderMember(member) {
    return <div className="groupMember">
      <p className="groupMemberName">{member.first_name} {member.last_name}</p>
    </div>
  }
  function renderMembers() {
    return <div>
      {state.currentGroup.groupMembers.map((member) => {
        return renderMember(member)
      })}
    </div>
  }
  return <div className="groupMembers">
    {renderMembers()}
  </div>
}
