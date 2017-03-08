import React from 'react'
import dateTime from '../../services/dateTime'


module.exports = (state, dispatch) => {
  var currentGroup = state.groups.find((group) => {
    return group.group_id == state.leaveRequestDetails.group_id
  }) || state.currentGroup.group_id
  function updateLeaveRequestDetails(content, content_type) {
    console.log({content, content_type});
    dispatch({type: 'UPDATE_LEAVE_REQUEST_DETAILS', payload: {content, content_type}})
  }
  function renderDays(dayCount) {
    console.log({dayCount});
    var options = []
    for (var i = 1; i <= dayCount; i++)options.push(i)
    return options.map((day_id => {
      return <option value={day_id}>{day_id}</option>
    }))
  }
  function renderDaySelect() {
    return <select onChange={(e) => updateLeaveRequestDetails(e.target.value, 'day_id')} className="daySelect">
      <option value=" " disabled selected>Day</option>
      {renderDays(dateTime.months[state.createEvent.month_id || 0].dayCount)}
    </select>
  }
  function renderMonthSelect() {
    return <div>
      <select  className="monthSelect" onChange={(e) => updateLeaveRequestDetails(e.target.value, 'month_id')}>
        <option value=" " disabled selected>Month</option>
        {dateTime.months.map((month) => {
          return <option value={month.id}>{month.name}</option>
        })}
      </select>
    </div>
  }
  function renderYearOptions(current_year) {
    var options = []
    for (var i = current_year; i <= current_year + 5; i++) {
      options.push(<option value={i}>{i}</option>)
    }
    return options
  }
  function renderYearSelect() {
    return <div>
      <select className="yearSelect" onChange={(e) => updateLeaveRequestDetails(e.target.value, 'year_id')}>
        <option value=" " disabled selected>Year</option>

        {renderYearOptions(2017)}
      </select>
    </div>
  }
  function renderLeaveDaysOptions(count) {
    var arr = []
    for (var i = 1; i <= count; i++) {
      arr.push(<option value={i}>{i}</option>)
    }
    return arr
  }
  function renderDateTimeSelect() {
    return (<div className="dateTime">
      <div className="dateSelect">
        {renderMonthSelect()}
        {renderDaySelect()}
        {renderYearSelect()}
      </div>
      <select onChange={(e) => updateLeaveRequestDetails(e.target.value, 'leave_days')}>
        <option disabled selected>Leave Days</option>
        {renderLeaveDaysOptions(50)}
      </select>
    </div>)
  }
  function renderLeaveType() {
    return <div className="leaveType">{
      state.leaveRequestDetails.isSickLeave
        ? "Sick Leave"
        : "Annual Leave"
    } </div>
  }

  function renderLeaveForm() {
    return <div className="leaveForm">
      <button onClick={(e) => updateLeaveRequestDetails(!state.leaveRequestDetails.isSickLeave, 'isSickLeave')}>Change Leave Type</button>
      {renderLeaveType()}
      {renderDateTimeSelect()}
      <input onChange={(e) => updateLeaveRequestDetails(e.target.value, 'leaveReason')} type="text" placeholder="Reason for Leave"></input>

    </div>
  }
  function renderContact() {
    return <div className="contactDetails">
      <div className="contactNumber">{state.currentGroup.contact_number}</div>
      <div className="contactEmail">{state.currentGroup.contact_email}</div>
    </div>
  }
  function renderGroupOption(group) {
    return <option value={group.group_id}>{group.group_name}</option>
  }
  function renderGroupSelect() {
    return <select onChange={(e) => updateLeaveRequestDetails(e.target.value, 'group_id')}>
      <option disabled selected>Select Group</option>
      {state.groups.map((group) => renderGroupOption(group))}
    </select>
  }
  function renderRequestButton() {
    var request = state.leaveRequestDetails
    if (!request.group_id || !request.day_id || !request.month_id || !request.year_id || !request.leaveReason || !request.leave_days) {
      return <div className="authErrorMsg pleaseSelectAllError">Please Select All Fields</div>
    } else return <button className="toggleButton">Create Event</button>
  }
  return (<div className="groups">
    <button onClick={() => dispatch({type: 'CHANGE_VIEW', payload: 'communication'})}>Go Back</button>
    <div>
      {renderGroupSelect()}
      {renderContact()}
      {renderLeaveForm()}
      {renderRequestButton()}
      <button>Send Leave Request</button>
    </div>

  </div>)

}
