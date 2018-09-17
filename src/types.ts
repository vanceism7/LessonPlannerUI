export interface IDb {
  GetActivities: () => IScheduleActivity[]
  Find: (id: number | null) => IActivityItem | undefined
  Add: (a: IActivityItem) => void
  Update: (id: number, a: IActivityItem) => void
}

export interface IActivityItem {
  id: number | null
  Title: string
  StartTime: string
  EndTime: string
  Description: string
}

export interface IScheduleActivity {
  id: number,
  Title: string,
  Description: string,
  StartTime: string,
  EndTime: string
}