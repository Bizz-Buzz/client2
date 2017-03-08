import React from 'react'
import renderAdminMessages from './adminMessages.js'

module.exports = (state, dispatch) => {

  function renderAdminView() {
    switch (state.adminView) {
      case 'adminMessages':
        return renderAdminMessages(state, dispatch)
      default:
        return renderAdminMessages(state, dispatch)
    }
  }
  return <div>
    {renderAdminView()}
  </div>
}
