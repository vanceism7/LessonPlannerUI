import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import ScheduleView from './UI/ScheduleView'
import ActivityEntry from './UI/ActvitiyEntry'

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

class ActivityRedirector extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      Redir: false,
      Activities: activities
    }

    this.AddActivity = this.AddActivity.bind(this)
    this.Abort = this.Abort.bind(this)
  }

  AddActivity (a) {
    let newActvities = this.state.Activities
    newActvities.push(a)

    this.setState({
      Redir: true,
      Activities: newActvities
    })

    console.log(this.state.Activities)
  }

  Abort () {
    this.setState({ Redir: true })
  }

  render () {
    if (this.state.Redir) {
      return <Redirect to='/' />
    }

    let activity = {
      id: this.props.location.id,
      Title: 'Untitled',
      StartTime: this.props.location.StartTime,
      EndTime: this.props.location.EndTime
    }

    let event = this.AddActivity

    return <ActivityEntry
      Activity={activity}
      SubmitActivity={event}
      Abort={this.Abort}
    />
  }
}

const ScheduleContainer = () => {
  return <ScheduleView Activities={activities} />
}

class App extends React.Component {
  render () {
    return (
      <div className='App'>
        <Route exact path='/' component={ScheduleContainer} />
        <Route path='/ActivityEntry' component={ActivityRedirector} />
      </div>
    )
  }
}

export default App
