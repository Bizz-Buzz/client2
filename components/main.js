import React from 'react'
import renderEvents from './views/events'
import header from './views/header'

module.exports = ({ state, dispatch }) => {
  function viewHandler() {
    switch (state.view) {
      case 'posts':
        return renderPosts(state, dispatch)
      default:
        return renderEvents(state, dispatch)
    }
  }

  return <div>
    {header(state, dispatch)}
    {viewHandler()}
  </div>
}
