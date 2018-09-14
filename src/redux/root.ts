import ScheduleReducer, {IScheduleState, IScheduleAction} from "./ScheduleDucks";
import {IScheduleProps} from './types'
import { Action } from 'redux'

export interface IRootState {
    ScheduleProps: IScheduleProps
    ScheduleState: IScheduleState
}

interface IRootAction {
    ScheduleActions: IScheduleAction
}

export default function rootReducer( state: IRootState, action: Action<IRootAction> ): IRootState {
    return {
        ScheduleState: ScheduleReducer( state.ScheduleState, action.type.ScheduleActions ),
        ScheduleProps: state.ScheduleProps
    }
}