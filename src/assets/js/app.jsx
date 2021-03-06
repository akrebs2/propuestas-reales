import React from 'react'
import ReactDOM from 'react-dom'
import Form from './components/Form'
import PostList from './containers/Index'
import Vote from './containers/Vote'
import Dashboard from './containers/Dashboard'

const reactForm = document.getElementById('react-form')
const reactIndex = document.getElementById('react-index')
const reactVote = document.getElementById('react-vote')
const reactDashboard = document.getElementById('react-dashboard')

if (reactForm) {
  ReactDOM.render(<Form />, reactForm)
}

if (reactIndex) {
  ReactDOM.render(<PostList />, reactIndex)
}

if (reactVote) {
  ReactDOM.render(<Vote serverData={reactVote.dataset} />, reactVote)
}

if (reactDashboard) {
  ReactDOM.render(<Dashboard />, reactDashboard)
}
