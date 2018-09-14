// -- Schedule types -- //
export interface IActivity {
    id: number,
    Title: string,
    Description: string,
    StartTime: string,
    EndTime: string
}

export interface IScheduleProps {
    Activities: IActivity[]
    TimeIncrement: number
}

export interface IScheduleDispatch {
    ItemClicked: (e: React.SyntheticEvent, id: number) => void
    ContainerClicked: (e: React.MouseEvent) => void
}
// --------------------- //

