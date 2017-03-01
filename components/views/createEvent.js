import React from 'react'
import dateTime from '../../services/dateTime'

module.exports = (state, dispatch) => {
  function updateCreateEvent (content, content_type) {
    dispatch({type: 'UPDATE_CREATE_EVENT', payload: {content, content_type}})
  }
  function renderMinuteSelect() {
    var options = []
    for (var i = 1; i < 60; i++)options.push(i)
    return (<select onChange={(e) => updateCreateEvent(e.target.value, 'minute_id')}>
    {options.map((minute_id => {
      var minutes = minute_id
      if (minutes < 10) minutes = `0${minutes.toString()}`
      return <option value={minute_id.toPrecision(2)}>{minutes}</option>
    }))}
    </select>)
  }
  function renderHourSelect() {
    var options = []
    for (var i = 1; i < 24; i++)options.push(i)
    return (<select onChange={(e) => updateCreateEvent(e.target.value, 'hour_id')}>
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
      {renderDays(dateTime.months[state.createEvent.month_id].dayCount)}
    </select>
  }
  function renderMonthSelect() {
    return <div className="monthSelect">
      <select  onChange={(e) => updateCreateEvent(e.target.value, 'month_id')}>
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
    return <div className="yearSelect">
      <select onCHange={(e) => updateCreateEvent(e.target.value, 'year_id')}>
        {renderYearOptions(2017)}
      </select>
    </div>
  }
  function renderDateTimeSelect() {
    return <div className="dateTime">
      <div className="dateSelect">
      {renderDaySelect()}
      {renderMonthSelect()}
      {renderYearSelect()}
      </div>
      <div className="timeSelect">
        {renderHourSelect()}:
        {renderMinuteSelect()}
      </div>
    </div>
  }
  return <div className="createEvent">
    <input className="detsInput eventInput" type="text" placeholder="Event Title"/>
    <input className="detsInputLast eventInput" type="text" placeholder="Event Description"/>
    {renderDateTimeSelect()}
    <div className="createEventButtonsDiv">
      <button className="createEventButtons leftButton" onClick={() => dispatch({type: 'TOGGLE', payload: 'createEventToggle'})}>Cancel</button>
      <button className="createEventButtons rightButton">Create</button>
    </div>
  </div>
}
