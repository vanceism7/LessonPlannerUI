import * as React from 'react'
import '../Styles/Components/ActivityEntry.css'
import { IActivityItem } from '../types';

interface IProps {
  Activity: IActivityItem
  SubmitActivity: (a: IActivityItem) => void
  Abort: () => void
}

class ActivityEntry extends React.Component<IProps,IActivityItem> {
  constructor (props: IProps) {
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

  public render () {
    return <div>
      <form onSubmit={this.handleSubmit}>
        <h3>Activity Info</h3>

        <div className='group'>
          <label htmlFor='title'>Title:</label>
          <br />
          <input type='text' id='title'
            value={this.state.Title}
            onChange={this.TitleChanged} />
        </div>

        <div className='group'>
          <label htmlFor='start'>Start Time:</label>
          <br />
          <input type='text' id='start'
            value={this.state.StartTime}
            onChange={this.StartTimeChanged} />
        </div>

        <div className='group'>
          <label htmlFor='end'>End Time:</label>
          <br />
          <input type='text' id='end'
            value={this.state.EndTime}
            onChange={this.EndTimeChanged} />
        </div>
        <br />

        <div className='group'>
          <label htmlFor='desc'>Description:</label>
          <br />
          <textarea id='desc' cols={50} rows={6}
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

  // Form changed events
  private TitleChanged (ev: React.ChangeEvent<HTMLInputElement>) { 
    this.setState({ Title: ev.target.value }) 
  }

  private StartTimeChanged (ev: React.ChangeEvent<HTMLInputElement>) { 
    this.setState({ StartTime: ev.target.value }) 
  }

  private EndTimeChanged (ev: React.ChangeEvent<HTMLInputElement>) { 
    this.setState({ EndTime: ev.target.value }) 
  }

  private DescriptionChanged (ev: React.ChangeEvent<HTMLTextAreaElement>) { 
    this.setState({ Description: ev.target.value }) 
  }
  // --

  private handleSubmit (ev: React.SyntheticEvent) {
    this.props.SubmitActivity(this.state)
    ev.preventDefault()
  }

  private handleAbort (ev: React.SyntheticEvent) {
    this.props.Abort()
    ev.preventDefault()
  }
}

export default ActivityEntry