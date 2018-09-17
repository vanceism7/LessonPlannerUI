// Activity Loader
// Used to fetch activity info
import { IDb, IScheduleActivity  } from '../types'

const activities: IScheduleActivity[] = // []
  [
    { id: 0, Title: 'Math Time', StartTime: '8:20', EndTime: '10:00', Description: '' },
    { id: 1, Title: 'Reading Time', StartTime: '10:00', EndTime: '11:30', Description: '' },
    { id: 2, Title: 'Lunch Time', StartTime: '11:00', EndTime: '11:30', Description: ''},
    { id: 3, Title: 'Alt Lunch Time', StartTime: '11:00', EndTime: '11:30', Description: '' },
    { id: 4, Title: 'Optional PE', StartTime: '11:20', EndTime: '12:00', Description: '' },
    { id: 5, Title: 'Math Continued', StartTime: '12:00', EndTime: '13:00', Description: '' }
  ]

class MemoryActivityDb implements IDb {
  constructor () {
    this.Find = this.Find.bind(this)
    this.Add = this.Add.bind(this)
    this.Update = this.Update.bind(this)
  }

  public GetActivities() {
    return activities
  }

  public Find (id: number | null) {
    const result = activities.find(x => x.id === id)
    return result
  }

  public Add (activity: IScheduleActivity) {
    const getNewID = () => 
      Math.max(...activities.map(x => x.id)) + 1

    activity.id = getNewID()
    activities.push(activity)
  }

  public Update (id: number, activity: IScheduleActivity) {
    const i = activities.map(x => x.id).indexOf(id)
    activities[i] = activity
  }
}

export default MemoryActivityDb
