import * as React from 'react'
// import { Route } from 'react-router-dom'
// import Db from './Services/ActivityDb'
// import ActivityController from './UI/ActivityController'
// import ScheduleController from './UI/ScheduleController'

// const NewScheduleController = () =>
//   <ScheduleController Activities={Db.activities} />

// const NewActivitiesController = (routeprops: any) =>
//   <ActivityController Db={new Db.ActivityDb()} {...routeprops} />

class App extends React.Component {
  public render () {
    return (
      <div className='App'>
        {/* <Route exact={true} path='/' component={NewScheduleController} /> */}
        {/* <Route path='/ActivityEntry' render={NewActivitiesController} /> */}
      </div>
    )
  }
}

export default App
