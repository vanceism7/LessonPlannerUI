import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import ScheduleView from './UI/ScheduleView'
import ActivityEntry from './UI/ActvitiyEntry'

const ActivityRedirector = (props) => {
  return <ActivityEntry
    id={props.location.id}
    StartTime={props.location.StartTime}
    EndTime={props.location.EndTime}
  />
}

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Route exact path='/' component={ScheduleView} />
        <Route path='/ActivityEntry' component={ActivityRedirector} />
      </div>
    )
  }
}

export default App
