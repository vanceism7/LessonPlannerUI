import * as React from 'react'
import Schedule from './Schedule'
import { IScheduleActivity } from "../types";
import { Redirect } from 'react-router-dom'

// Converts Mouse Y coordinate into time marking
const MouseYToTime = (MouseY:number): string => {
  const TopMargin = 10
  const Hour = Math.floor((MouseY - TopMargin) / 60)
  const Minute = (MouseY - TopMargin) % 60

  return `${Hour}:${Minute.toString().padStart(2, '0')}`
}

interface IActivityInfo {
  id: number | null,
  StartTime: string,
  EndTime: string
}

interface IState {
  ActivityClicked: IActivityInfo | null
}

interface IProps {
  Activities: IScheduleActivity[]
}

class ScheduleController extends React.Component<IProps,IState> {
  constructor (props: IProps) {
    super(props)

    this.state = { ActivityClicked: null }
    this.EditActivityEv = this.EditActivityEv.bind(this)
    this.NewActivityEv = this.NewActivityEv.bind(this)
    this.GoToActivityEntry = this.GoToActivityEntry.bind(this)
  }

  public render () {
    if (this.state.ActivityClicked !== null) {
      return this.GoToActivityEntry()
    }

    return (
      <div>
        <Schedule Activities={this.props.Activities}
          TimeIncrement={60}
          ContainerClicked={this.NewActivityEv}
          ItemClicked={this.EditActivityEv} />
      </div>
    )
  }

  private NewActivityInfo (id: (number|null), StartTime: string, EndTime: string): IActivityInfo {
    return { id, StartTime, EndTime }
  }

  private EditActivityEv (e:React.SyntheticEvent, id:number): void {
    this.setState( { ActivityClicked: this.NewActivityInfo( id, '', '' )} )
    e.stopPropagation()
  }

  private NewActivityEv (e:React.MouseEvent): void {
    const StartTime = MouseYToTime(e.pageY)
    const EndTime = MouseYToTime(e.pageY + 60)
    this.setState({ ActivityClicked: this.NewActivityInfo(null, StartTime, EndTime) })
  }

  private GoToActivityEntry () {
    const ev = this.state.ActivityClicked as IActivityInfo
    const to = {
      pathname: '/ActivityEntry',
      ...ev
    }

    return <Redirect push to={to} />
  }
}

export default ScheduleController
