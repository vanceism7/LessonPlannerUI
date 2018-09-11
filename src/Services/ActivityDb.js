// Activity Loader
// Used to fetch activity info

let activities = // []
  [
    { id: 0, Title: 'Math Time', StartTime: '8:20', EndTime: '10:00' },
    { id: 1, Title: 'Reading Time', StartTime: '10:00', EndTime: '11:30' },
    { id: 2, Title: 'Lunch Time', StartTime: '11:00', EndTime: '11:30' },
    { id: 3, Title: 'Alt Lunch Time', StartTime: '11:00', EndTime: '11:30' },
    { id: 4, Title: 'Optional PE', StartTime: '11:20', EndTime: '12:00' },
    { id: 5, Title: 'Math Continued', StartTime: '12:00', EndTime: '13:00' }
  ]

class ActivityDb {
  constructor () {
    this.Find = this.Find.bind(this)
    this.Add = this.Add.bind(this)
    this.Update = this.Update.bind(this)
  }

  Find (id) {
    let result = activities.find(x => x.id === id)
    return result
  }

  getNewID () {
    return Math.max(...activities.map(x => x.id)) + 1
  }

  Add (activity) {
    activity.id = this.getNewID()
    activities.push(activity)
  }

  Update (id, activity) {
    let i = activities.map(x => x.id).indexOf(id)
    activities[i] = activity
  }
}

export default { ActivityDb, activities }
// export { activities }
