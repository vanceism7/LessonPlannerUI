import React from 'react'
import {Redirect} from 'react-router-dom'
import ActivityEntry from './ActvitiyEntry'

class ActivityController extends React.Component {
  constructor (props) {
    super(props)

    this.state = { Redir: false }
    this.AddActivity = this.AddActivity.bind(this)
    this.UpdateActivity = this.UpdateActivity.bind(this)
    this.Close = this.Close.bind(this)
  }

  AddActivity (a) {
    this.props.Db.Add(a)
    this.Close()
  }

  UpdateActivity (a) {
    this.props.Db.Update(a.id, a)
    this.Close()
  }

  Close () {
    this.setState({ Redir: true })
  }

  NewActivity () {
    return {
      id: null,
      Title: 'New Activity',
      StartTime: this.props.location.StartTime,
      EndTime: this.props.location.EndTime
    }
  }

  render () {
    if (this.state.Redir) {
      return <Redirect to='/' />
    }

    let event = this.UpdateActivity
    let activity = this.props.Db.Find(this.props.location.id)

    console.log(activity)

    if (activity == null) {
      event = this.AddActivity
      activity = this.NewActivity()
    }

    return <ActivityEntry
      Activity={activity}
      SubmitActivity={event}
      Abort={this.Close}
    />
  }
}

export default ActivityController
