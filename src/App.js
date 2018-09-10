import React from 'react'
import { Route } from 'react-router-dom'
import ScheduleController from './UI/ScheduleController'
import ActivityController from './UI/ActivityController'

// Temp Activities for testing UI
let activities =
  [
    { id: 0, Title: 'Math Time', StartTime: '8:20', EndTime: '10:00' },
    { id: 1, Title: 'Reading Time', StartTime: '10:00', EndTime: '11:30' },
    { id: 2, Title: 'Lunch Time', StartTime: '11:00', EndTime: '11:30' },
    { id: 3, Title: 'Alt Lunch Time', StartTime: '11:00', EndTime: '11:30' },
    { id: 4, Title: 'Optional PE', StartTime: '11:20', EndTime: '12:00' },
    { id: 5, Title: 'Math Continued', StartTime: '12:00', EndTime: '13:00' }
  ]

const NewScheduleController = () =>
  <ScheduleController Activities={activities} />

const NewActivitiesController = (routeprops) =>
  <ActivityController Activities={activities} {...routeprops} />

class App extends React.Component {
  render () {
    return (
      <div className='App'>
        <Route exact path='/' component={NewScheduleController} />
        <Route path='/ActivityEntry' render={NewActivitiesController} />
      </div>
    )
  }
}

export default App
