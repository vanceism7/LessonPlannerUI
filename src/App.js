import React, { Component } from 'react'
import Schedule from './UI/Schedule'

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

let ItemClickedEv = (e, id) => {
  alert(`Activity ${id} clicked!`)
  e.stopPropagation()
}

// Converts Mouse Y coordinate into time marking
let MouseYToTime = (MouseY) => {
  let TopMargin = 10
  let Hour = Math.floor((MouseY - TopMargin) / 60)
  let Minute = (MouseY - TopMargin) % 60

  return `${Hour}:${Minute.toString().padStart(2, '0')}`
}

class App extends Component {
  constructor (props) {
    super(props)

    this.ActivityCreated = this.ActivityCreated.bind(this)
  }

  ActivityCreated (e) {
    let time = MouseYToTime(e.pageY)
    let endTime = MouseYToTime(e.pageY + 60)
    // activities.push({ id: 6, Title: 'Untitled', StartTime: time, EndTime: endTime })

    // console.log(activities)
    // this.forceUpdate()
  }

  render () {
    return (
      <div className='App'>
        <Schedule Activities={activities}
          TimeIncrement={60}
          ContainerClicked={this.ActivityCreated}
          ItemClicked={ItemClickedEv} />
      </div>
    )
  }
}

export default App
