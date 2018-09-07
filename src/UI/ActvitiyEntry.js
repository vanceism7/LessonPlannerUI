import React from 'react'

class ActivityEntry extends React.Component {
  render () {
    return <div>
      <h2>New Activity</h2>
      <p>Activity: {this.props.id}</p>
      <p>Start Time: {this.props.StartTime}</p>
      <p>End Time: {this.props.EndTime}</p>
      <p>Here's where the new activity will be entered</p>
    </div>
  }
}

export default ActivityEntry
