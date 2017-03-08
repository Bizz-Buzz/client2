import React from 'react'
import dateTime from '../../services/dateTime'
import postEvent from '../../services/postEvent'

module.exports = (state, dispatch) => {
  function updateCreateEvent (content, content_type) {
    dispatch({type: 'UPDATE_CREATE_EVENT', payload: {content, content_type}})
  }
  function renderGroupOption(option) {
    return <option value={option.group_id}>{option.group_name}</option>
  }
  function renderGroupSelect() {
    var groupOptions = state.groups.filter((group) => {
      return group.isAdmin
    })
    return <select className="selectParentGroup" onChange={(e) => updateCreateEvent(e.target.value, 'group_id')} >
      <option value=" " disabled selected>Group</option>
      {groupOptions.map((option) => renderGroupOption(option))}
    </select>
  }
  function renderMinuteSelect() {
    var options = []
    for (var i = 1; i < 60; i++)options.push(i)
    return (<select className="minuteSelect" onChange={(e) => updateCreateEvent(e.target.value, 'minute_id')}>
      <option value=" " disabled selected>Minute</option>
      {options.map((minute_id => {
        var minutes = minute_id
        if (minutes < 10) minutes = `0${minutes.toString()}`
        return <option value={minute_id}>{minutes}</option>
      }))}
    </select>)
  }
  function renderHourSelect() {
    var options = []
    for (var i = 1; i < 24; i++)options.push(i)
    return (<select className="hourSelect" onChange={(e) => updateCreateEvent(e.target.value, 'hour_id')}>
      <option value=" " disabled selected>Hour</option>
      {options.map((hour_id => {
        var hours = hour_id
        if (hours < 10) hours = `0${hours.toString()}`
      return <option value={hour_id}>{hours}</option>
      }))}
    </select>)
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
    return <select onChange={(e) => updateCreateEvent(e.target.value, 'day_id')} className="daySelect">
      <option value=" " disabled selected>Day</option>
      {renderDays(dateTime.months[state.createEvent.month_id || 0].dayCount)}
    </select>
  }
  function renderMonthSelect() {
    return <div>
      <select  className="monthSelect" onChange={(e) => updateCreateEvent(e.target.value, 'month_id')}>
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
      <select className="yearSelect" onChange={(e) => updateCreateEvent(e.target.value, 'year_id')}>
        <option value=" " disabled selected>Year</option>

        {renderYearOptions(2017)}
      </select>
    </div>
  }
  function renderDateTimeSelect() {
    return <form className="dateTime">
      <div className="dateSelect">
      {renderMonthSelect()}
      {renderDaySelect()}
      {renderYearSelect()}
      </div>
      <div className="timeSelect">
        {renderHourSelect()} :
        {renderMinuteSelect()}
      </div>
      {renderGroupSelect()}
    </form>
  }
  function renderCreateButton() {
    var event = state.createEvent
    if (!event.group_id || !event.minute_id || !event.hour_id || !event.day_id || !event.month_id || !event.year_id || !event.title || !event.description) {
      return <div className="inputInvalid">Please Select All Fields</div>
    } else return <button onClick={() => postEvent(state, dispatch)} className="createEventButtons rightButton">Create Event</button>
  }
  return <div className="createEvent">
    <input onChange={(e) => updateCreateEvent(e.target.value, 'title')} className="detsInput eventInput" type="text" placeholder="Event Title"/>
    <input onChange={(e) => updateCreateEvent(e.target.value, 'description')} className="detsInputLast eventInput" type="text" placeholder="Event Description"/>
    {renderDateTimeSelect()}
    <div className="createEventButtonsDiv">
      <button className="createEventButtons leftButton" onClick={() => dispatch({type: 'TOGGLE', payload: 'createEventToggle'})}>Cancel</button>
      {renderCreateButton()}
    </div>
  </div>
}
