import React from 'react'
import renderEvents from './views/events'
import renderCreateEvent from './views/createEvent'
import renderPosts from './views/posts'
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
      default:
        return renderEvents(state, dispatch)
    }
  }

  return <div>
    {header(state, dispatch)}
    {viewHandler()}
  </div>
}
