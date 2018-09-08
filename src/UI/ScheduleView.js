import React from 'react'
import Schedule from './Schedule'
import { Redirect } from 'react-router-dom'

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
        <Schedule Activities={activities}
          TimeIncrement={60}
          ContainerClicked={this.NewActivityEv}
          ItemClicked={this.EditActivityEv} />
      </div>
    )
  }
}

export default ScheduleView
