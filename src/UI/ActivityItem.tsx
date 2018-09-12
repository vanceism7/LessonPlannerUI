import * as React from 'react'
import * as moment from 'moment'
import '../Styles/Components/schedule.css'

// Gets duration of moment in minutes
const toMinutes = (m: moment.Moment) => ((m.hour() * 60) + m.minute())

// Causes an extra grid row to be taken if the minute portion of the time is > 0
const Over1m = (m: number) => m >= 1 ? 1 : 0

// Converts Activity Time into a position on the grid
// The grid spaces start at 1 (not 0), so we add 1 to row start and end
const TimeToGridPosition = (StartTime: moment.Moment, EndTime: moment.Moment) => {
  return {
    gridRowStart: StartTime.hour() + 1,
    gridRowEnd: EndTime.hour() + Over1m(EndTime.minute()) + 1
  }
}

const NewPosition = (top: number, height: number) => {
  return { top, height }
}

interface IProps {
  StartTime: string
  EndTime: string
  Title: string
  ActivityClicked: (e: React.SyntheticEvent) => void
}

const ActivityItem = (props: IProps) => {
  const StartTime = moment(props.StartTime, 'HH:mm')
  const EndTime = moment(props.EndTime, 'HH:mm')
  const height = toMinutes(EndTime) - toMinutes(StartTime) - 1

  const gridPos = TimeToGridPosition(StartTime, EndTime)
  const pos = NewPosition(StartTime.minute(), height)

  return (
    <div className='ActivityDiv' style={gridPos}>
      <div className='Activity' style={pos} onClick={props.ActivityClicked}>
        {props.Title}
      </div>
    </div>
  )
}

export default ActivityItem
