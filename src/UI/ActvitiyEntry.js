import React from 'react'
import '../Styles/Components/ActivityEntry.css'

class ActivityEntry extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      id: this.props.Activity.id,
      Title: this.props.Activity.Title,
      StartTime: this.props.Activity.StartTime,
      EndTime: this.props.Activity.EndTime,
      Description: this.props.Activity.Description
    }

    this.TitleChanged = this.TitleChanged.bind(this)
    this.StartTimeChanged = this.StartTimeChanged.bind(this)
    this.EndTimeChanged = this.EndTimeChanged.bind(this)
    this.DescriptionChanged = this.DescriptionChanged.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleAbort = this.handleAbort.bind(this)
  }

  TitleChanged (ev) { this.setState({ Title: ev.target.value }) }
  StartTimeChanged (ev) { this.setState({ StartTime: ev.target.value }) }
  EndTimeChanged (ev) { this.setState({ EndTime: ev.target.value }) }
  DescriptionChanged (ev) { this.setState({ Description: ev.target.value }) }

  handleSubmit (ev) {
    this.props.SubmitActivity(this.state)
    ev.preventDefault()
  }

  handleAbort (ev) {
    this.props.Abort()
    ev.preventDefault()
  }

  render () {
    return <div>
      <form onSubmit={this.handleSubmit}>
        <h3>Activity Info</h3>

        <div className='group'>
          <label for='title'>Title:</label>
          <br />
          <input type='text' id='title'
            value={this.state.Title}
            onChange={this.TitleChanged} />
        </div>

        <div className='group'>
          <label for='start'>Start Time:</label>
          <br />
          <input type='text' id='start'
            value={this.state.StartTime}
            onChange={this.StartTimeChanged} />
        </div>

        <div className='group'>
          <label for='end'>End Time:</label>
          <br />
          <input type='text' id='end'
            value={this.state.EndTime}
            onChange={this.EndTimeChanged} />
        </div>
        <br />

        <div className='group'>
          <label for='desc'>Description:</label>
          <br />
          <textarea id='desc' cols='50' rows='6'
            value={this.state.Description}
            onChange={this.DescriptionChanged}
          />
        </div>
        <br />

        <input className='button' type='submit' value='Save' />
        <button className='button' onClick={this.props.Abort}>Cancel</button>
      </form>
    </div>
  }
}

export default ActivityEntry
