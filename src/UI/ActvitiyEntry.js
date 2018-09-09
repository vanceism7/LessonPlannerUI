import React from 'react'
import '../Styles/Components/ActivityEntry.css'

class ActivityEntry extends React.Component {
  /* Properties
    this.props.Activity.id
    this.props.Activity.StartTime
    this.props.Activity.EndTime
  */

  render () {
    return <div>
      <form>
        <h3>Activity Info</h3>

        <div className='group'>
          <label for='name'>Activity Name:</label>
          <br />
          <input id='name' name='Name' type='text' />
        </div>

        <div className='group'>
          <label for='start'>Start Time:</label>
          <br />
          <input id='start' name='StartTime' type='time' />
        </div>

        <div className='group'>
          <label for='end'>End Time:</label>
          <br />
          <input id='end' name='EndTime' type='time' />
        </div>
        <br />

        <div className='group'>
          <label for='desc'>Description:</label>
          <br />
          <textarea id='desc' name='Description'
            cols='50'
            rows='6'
          />
        </div>
        <br />

        <input type='submit' value='Save' />
        <input type='submit' value='Cancel' />
      </form>
    </div>
  }
}

export default ActivityEntry
