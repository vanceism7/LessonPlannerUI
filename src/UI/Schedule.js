import React from 'react'
import ActivityItem from './ActivityItem'
import '../Styles/Components/schedule.css'

// Quick component for creating divs with TimeSlot class in first col of grid
const TimeHeader = (props) => {
  let position = { gridRow: props.position }

  return <div className='TimeSlot' style={position}>
    {props.time}
  </div>
}

// Main Schedule Component
class Schedule extends React.Component {
  constructor (props) {
    super(props)
    this.createActivities = this.createActivities.bind(this)
    this.createActivity = this.createActivity.bind(this)
    this.createTimeHeaders = this.createTimeHeaders.bind(this)
  }

  createActivity (Activity) {
    return <ActivityItem
      id={Activity.id}
      Title={Activity.Title}
      StartTime={Activity.StartTime}
      EndTime={Activity.EndTime}
      ActivityClicked={(e) => this.props.ItemClicked(e, Activity.id)}
    />
  }

  createActivities () {
    return this.props.Activities.map(this.createActivity)
  }

  createTimeHeaders () {
    // Get the amount of sub-divisions an hour should be split into
    // (e.g: Split hour into intervals of 10, 15, 30 minutes, etc)
    let minuteInterval = Math.round(60 / this.props.TimeIncrement)

    // Create a time-mark for each hour of the day with minute-interval markings in between each hour
    return [...Array(24).keys()].map(x =>
      [...Array(minuteInterval).keys()].map(y =>
        <TimeHeader position={x + y + 1} time={`${x}:${(y * this.props.TimeIncrement).toString().padStart(2, '0')}`} />))
  }

  render () {
    return <div className='ScheduleContainer' onClick={this.props.ContainerClicked}>
      {this.createTimeHeaders()}
      {this.createActivities()}
    </div>
  }
}

export default Schedule
