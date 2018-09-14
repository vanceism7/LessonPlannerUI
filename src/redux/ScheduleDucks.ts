enum Actions {
    NewActivity,
    EditActivity
}

interface IActivityInfo {
    id: number | null,
    StartTime: string
    EndTime: string
}

interface IScheduleAction {
    type: Actions,
    data: IActivityInfo
}

interface IScheduleState {
    ActivityClicked: IActivityInfo | null
}

export const NewActivity = (StartTime: string, EndTime: string): IScheduleAction => {
    return {
        type: Actions.NewActivity,
        data: {
            id: null,
            StartTime,
            EndTime
        }
    }
}

export const EditActivity = (id: number): IScheduleAction => {
    return {
        type: Actions.EditActivity,
        data: {
            id,
            StartTime: '',
            EndTime: ''
        }
    }
}

const reducer = (state: IScheduleState, action: IScheduleAction): IScheduleState => {
    switch( action.type ) {
        case Actions.NewActivity:
            return Object.assign( {}, state, {...action.data} )

        case Actions.EditActivity:
            return Object.assign( {}, state, {...action.data} )

        default: 
            return state
    }
}

export default reducer
export {IScheduleState, IScheduleAction}