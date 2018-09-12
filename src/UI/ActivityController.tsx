import * as React from 'react'
import {Redirect} from 'react-router-dom'
import ActivityEntry, {IActivity} from './ActvitiyEntry'
// import {Activity} from './Schedule'

interface IDb {
  Find: (id: number | null) => IActivity
  Add: (a: IActivity) => void
  Update: (id: number, a: IActivity) => void
}

interface IProps {
  Db: IDb 
  location: { id: number | null, StartTime: string, EndTime: string }
}

class ActivityController extends React.Component<IProps,any> {
  constructor (props: IProps) {
    super(props)

    this.state = { Redir: false }
    this.AddActivity = this.AddActivity.bind(this)
    this.UpdateActivity = this.UpdateActivity.bind(this)
    this.Close = this.Close.bind(this)
  }

  public render () {
    if (this.state.Redir) {
      return <Redirect to='/' />
    }

    let event = this.UpdateActivity
    let activity = this.props.Db.Find(this.props.location.id)

    console.log(activity)

    if (activity == null) {
      event = this.AddActivity
      activity = this.NewActivity()
    }

    return <ActivityEntry
      Activity={activity}
      SubmitActivity={event}
      Abort={this.Close}
    />
  }

  private AddActivity (a: IActivity) {
    this.props.Db.Add(a)
    this.Close()
  }
  private UpdateActivity (a: IActivity) {
    if( a.id === null ) { throw new Error('ID is null, can\'t update activity') }

    this.props.Db.Update(a.id, a)
    this.Close()
  }

  private Close () {
    this.setState({ Redir: true })
  }

  private NewActivity () {
    return {
      id: -1,
      Title: 'New Activity',
      Description: '',
      StartTime: this.props.location.StartTime,
      EndTime: this.props.location.EndTime
    }
  }
}

export default ActivityController
export { IDb }