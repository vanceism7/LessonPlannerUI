import * as React from 'react'
import { Route } from 'react-router-dom'
import Db from './Services/MemoryActivityDb'
import ActivityController from './UI/ActivityController'
import ScheduleController from './UI/ScheduleController'

class App extends React.Component {

  private ActivityDb = new Db()

  constructor() {
    super({})
    this.NewScheduleController = this.NewScheduleController.bind(this)
  }

  public render () {
    return (
      <div className='App'>
        <Route exact={true} path='/' component={this.NewScheduleController} />
        <Route path='/ActivityEntry' render={this.NewActivitiesController} />
      </div>
    )
  }

  private NewScheduleController = () =>
    <ScheduleController Activities={this.ActivityDb.GetActivities()} />

  private NewActivitiesController = (routeprops: any) =>
    <ActivityController Db={this.ActivityDb} {...routeprops} />
}

export default App
