import React from 'react'
import Schedule from './Schedule'
import { Redirect } from 'react-router-dom'

// Converts Mouse Y coordinate into time marking
let MouseYToTime = (MouseY) => {
  let TopMargin = 10
  let Hour = Math.floor((MouseY - TopMargin) / 60)
  let Minute = (MouseY - TopMargin) % 60

  return `${Hour}:${Minute.toString().padStart(2, '0')}`
}

class ScheduleView extends React.Component {
  constructor (props) {
    super(props)

    this.state = { ActivityClicked: null }
    this.EditActivityEv = this.EditActivityEv.bind(this)
    this.NewActivityEv = this.NewActivityEv.bind(this)
    this.GoToActivityEntry = this.GoToActivityEntry.bind(this)
  }

  NewActivityInfo (id, StartTime, EndTime) {
    return { id: id, StartTime: StartTime, EndTime: EndTime }
  }

  EditActivityEv (e, id) {
    this.setState({ ActivityClicked: this.NewActivityInfo(id, null, null) })
    e.stopPropagation()
  }

  NewActivityEv (e) {
    let StartTime = MouseYToTime(e.pageY)
    let EndTime = MouseYToTime(e.pageY + 60)
    this.setState({ ActivityClicked: this.NewActivityInfo(null, StartTime, EndTime) })
  }

  GoToActivityEntry () {
    return <Redirect push to={{
      pathname: '/ActivityEntry',
      id: this.state.ActivityClicked.id,
      StartTime: this.state.ActivityClicked.StartTime,
      EndTime: this.state.ActivityClicked.EndTime
    }} />
  }

  render () {
    if (this.state.ActivityClicked !== null) {
      return this.GoToActivityEntry()
    }

    return (
      <div>
        <Schedule Activities={this.props.Activities}
          TimeIncrement={60}
          ContainerClicked={this.NewActivityEv}
          ItemClicked={this.EditActivityEv} />
      </div>
    )
  }
}

export default ScheduleView
