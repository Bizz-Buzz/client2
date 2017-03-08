import React from 'react'

module.exports = ({createEvent}, dispatch) => {
  request
    .admin(`${url}admin`)
    .withCredentials()
    .send(createEvent)
    .end((err, res) => {
      if (!err) {
        console.log({res});
        dispatch({type: 'RECIEVE_EVENT', payload: res.body})
      } else console.log({err});
    })
}
