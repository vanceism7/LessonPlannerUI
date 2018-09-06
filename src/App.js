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

let ActivityCreated = (e) => {
  let time = e.clientY / 60
  alert(`Activity Created for ${time}!`)
}

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Schedule Activities={activities}
          TimeIncrement={60}
          ContainerClicked={ActivityCreated}
          ItemClicked={ItemClickedEv} />
      </div>
    )
  }
}

export default App
