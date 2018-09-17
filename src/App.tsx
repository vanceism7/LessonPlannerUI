import * as React from 'react'
import { Route } from 'react-router-dom'
import Db from './Services/MemoryActivityDb'
import ActivityController, { IDb } from './UI/ActivityController'
import ScheduleController from './UI/ScheduleController'

const NewScheduleController = (ActivityDb: IDb) =>
  <ScheduleController Activities={ActivityDb.GetActivities()} />

const NewActivitiesController = (ActivityDb: IDb, routeprops: any) =>
  <ActivityController Db={ActivityDb} {...routeprops} />

class App extends React.Component {

  private ActivityDb = new Db()

  public render () {
    return (
      <div className='App'>
        <Route exact={true} path='/' component={NewScheduleController.bind(this.ActivityDb)} />
        <Route path='/ActivityEntry' render={NewActivitiesController.bind(this.ActivityDb)} />
      </div>
    )
  }
}

export default App
