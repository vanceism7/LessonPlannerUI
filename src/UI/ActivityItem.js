import React from 'react'
import moment from 'moment'
import '../Styles/Components/schedule.css'

// Gets duration of moment in minutes
let toMinutes = (m) => ((m.hour() * 60) + m.minute())

// Causes an extra grid row to be taken if the minute portion of the time is > 0
let Over1m = (m) => m >= 1 ? 1 : 0

// Converts Activity Time into a position on the grid
// The grid spaces start at 1 (not 0), so we add 1 to row start and end
let TimeToGridPosition = (StartTime, EndTime) => {
  return {
    gridRowStart: StartTime.hour() + 1,
    gridRowEnd: EndTime.hour() + Over1m(EndTime.minute()) + 1
  }
}

let NewPosition = (top, height) => {
  return { top: top, height: height }
}

const ActivityItem = (props) => {
  let StartTime = moment(props.StartTime, 'HH:mm')
  let EndTime = moment(props.EndTime, 'HH:mm')
  let height = toMinutes(EndTime) - toMinutes(StartTime) - 1

  let gridPos = TimeToGridPosition(StartTime, EndTime)
  let pos = NewPosition(StartTime.minute(), height)

  return (
    <div className='ActivityDiv' style={gridPos}>
      <div className='Activity' style={pos} onClick={props.ActivityClicked}>
        {props.Title}
      </div>
    </div>
  )
}

export default ActivityItem
