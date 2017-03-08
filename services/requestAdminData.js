import React from 'react'
import request from 'superagent'
import url from '../requestUrl'

module.exports = (state, dispatch) => {
  request
    .get(`${url}admin`)
    .withCredentials()
    .end((err, res) => {
      if (!err) {
        console.log({res});
        dispatch({type: 'RECIEVE_ADMIN_DATA', payload: res.body})
      } else console.log({err});
    })
}
