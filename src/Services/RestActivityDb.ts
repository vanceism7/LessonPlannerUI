// Activity Loader
// Used to fetch activity info

import { IScheduleActivity } from '../UI/Schedule'
import { IDb } from '../UI/ActivityController'

class RestActivityDb implements IDb {

  private activities: IScheduleActivity[]

  constructor () {

    this.activities = []
    this.GetActivities = this.GetActivities.bind(this)
    this.Find = this.Find.bind(this)
    this.Add = this.Add.bind(this)
    this.Update = this.Update.bind(this)
  }

  public GetActivities(): IScheduleActivity[] {
    if( this.activities.length <= 0 ) {
      return []
    }
    
    return this.activities
  }

  public Find (id: number | null) {
    const result = this.GetActivities().find(x => x.id === id)
    return result
  }

  public Add (activity: IScheduleActivity) {
    const getNewID = () => 
      Math.max(...this.GetActivities().map(x => x.id)) + 1

    activity.id = getNewID()
    // ajax post here

    // this.activities.push(activity)
  }

  public Update (id: number, activity: IScheduleActivity) {
    const i = this.GetActivities().map(x => x.id).indexOf(id)
    // ajax put here

    // this.activities[i] = activity
  }
}

export default RestActivityDb
