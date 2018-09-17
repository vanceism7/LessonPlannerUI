import * as React from 'react'
import ActivityItem from './ActivityItem'
import '../Styles/Components/schedule.css'
import { IScheduleActivity } from '../types';

// Quick component for creating divs with TimeSlot class in first col of grid
const TimeHeader = (props: { position: number, time: string } ) => {
  const position = { gridRow: props.position }

  return <div className='TimeSlot' style={position}>
    {props.time}
  </div>
}

interface IScheduleProps {
  Activities: IScheduleActivity[]
  TimeIncrement: number
  ItemClicked: (e: React.SyntheticEvent, id: number) => void
  ContainerClicked: (e: React.MouseEvent) => void
}

// Main Schedule Component
class Schedule extends React.Component<IScheduleProps,{}> {
  constructor (props: IScheduleProps) {
    super(props)
    this.createActivities = this.createActivities.bind(this)
    this.createActivity = this.createActivity.bind(this)
    this.createTimeHeaders = this.createTimeHeaders.bind(this)
  }

  public render () {
    return <div className='ScheduleContainer' onClick={this.props.ContainerClicked}>
      {this.createTimeHeaders()}
      {this.createActivities()}
    </div>
  }

  private createActivity (Activity: IScheduleActivity ) {
    const ClickFunc = (e: React.SyntheticEvent) => 
      this.props.ItemClicked(e, Activity.id)

    return <ActivityItem
      Title={Activity.Title}
      StartTime={Activity.StartTime}
      EndTime={Activity.EndTime}
      ActivityClicked={ClickFunc}
    />
  }

  private createActivities () {
    return this.props.Activities.map(this.createActivity)
  }

  private createTimeHeaders () {
    // Get the amount of sub-divisions an hour should be split into
    // (e.g: Split hour into intervals of 10, 15, 30 minutes, etc)
    const minuteInterval = Math.round(60 / this.props.TimeIncrement)

    // Create a time-mark for each hour of the day with minute-interval markings in between each hour
    return [...Array(24).keys()].map(x =>
      [...Array(minuteInterval).keys()].map(y =>
        <TimeHeader key={x+y} 
          position={x + y + 1} 
          time={`${x}:${(y * this.props.TimeIncrement).toString().padStart(2, '0')}`} /> ))
  }
}

export default Schedule
export { IScheduleActivity }