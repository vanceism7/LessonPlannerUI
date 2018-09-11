import React from 'react'
import { Route } from 'react-router-dom'
import ScheduleController from './UI/ScheduleController'
import ActivityController from './UI/ActivityController'
import Db from './Services/ActivityDb'

const NewScheduleController = () =>
  <ScheduleController Activities={Db.activities} />

const NewActivitiesController = (routeprops) =>
  <ActivityController Db={new Db.ActivityDb()} {...routeprops} />

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
