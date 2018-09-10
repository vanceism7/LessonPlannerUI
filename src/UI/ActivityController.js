import React from 'react'
import {Redirect} from 'react-router-dom'
import ActivityEntry from './ActvitiyEntry'

class ActivityController extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      Redir: false,
      Activities: props.Activities
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

export default ActivityController
