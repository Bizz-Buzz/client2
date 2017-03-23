import request from 'superagent'
import url from '../requestUrl'

module.exports = (group, dispatch) => {
  request
    .get(`${url}group`)
    .query({group_id: group.group_id})
    .withCredentials()
    .end((err, res) => {
      if (!err) {
        console.log({res});
        dispatch({type: 'VIEW_GROUP', payload: {group, groupData: res.body}})
      } else console.log({err})
    })
}
