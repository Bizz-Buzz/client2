import React from 'react'
import { render } from 'react-dom'
import App from './components/app'
import Router from 'sheet-router'
import { createStore } from 'redux'

import Login from './components/login'
import Signup from './components/signup'
import Main from './components/main'

var reducer = require('./reducer')

var app = document.createElement('div')
document.querySelector('main').appendChild(app)

const initialState = {
  theme: 'default',
  title: "Bizz-Buzz",
  route: '/',
  view: 'events',
  isLoading: false,
  loginDetails: {
    username: ' ',
    password: ' '
    },
  signupDetails: {},
  authError: null,
  user: {},
  currentGroup: [],
  bizz: null,
  events: [],
  createEventToggle: false,
  posts: [],
  createPost: {
    is_alert: false,
    content: '',
    group_id: 1
  },
  createPostToggle: false,
  alertsOnly: false,
  postResponse: '',
  selectedPost: null,
  postResponses: [],
  groups: [],
  findGroup: [],
  selectedGroup: null,
  createGroupToggle: false,
  createGroup: {
    parent_id: 1,
    invite_only: false
  },



}

var store = createStore(reducer, initialState)
const {getState, dispatch, subscribe} = store


const route = Router({ default: '/404' }, [
  ['/', (params) => Login],
  ['/signUp', (params) => Signup],
  ['/bizz', (params) => Main]
])

subscribe(() => {
  console.log(getState().route);
  const Component = route(getState().route)
  render(<Component state={getState()} dispatch={dispatch} />, app)
})

render(<App name='bizzBuzz' />, app)
console.log('welcome to bizzBuzz')

dispatch({type: 'INIT'})
