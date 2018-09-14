import Schedule from './Schedule'
import { NewActivity, EditActivity } from "../redux/ScheduleDucks";
import { IScheduleDispatch, IScheduleProps } from "../redux/types";
import { IRootState } from "../redux/root"
import { connect } from 'react-redux';

// Converts Mouse Y coordinate into time marking
const MouseYToTime = (MouseY: number): string => {
    const TopMargin = 10
    const Hour = Math.floor((MouseY - TopMargin) / 60)
    const Minute = (MouseY - TopMargin) % 60

    return `${Hour}:${Minute.toString().padStart(2, '0')}`
}

const mapStateToProps = (state: IRootState): IScheduleProps => {
    return state.ScheduleProps
}

const mapDispatchToProps = (dispatch: any): IScheduleDispatch => {
    return {
        ItemClicked: (e: React.SyntheticEvent, id: number) => {
            e.stopPropagation() // Side effects bad in dispatch? (I dont remember)
            dispatch(EditActivity(id))
        },

        ContainerClicked: (e: React.MouseEvent) => {
            const Start = MouseYToTime(e.pageY)
            const End = MouseYToTime(e.pageY)

            dispatch(NewActivity(Start, End))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Schedule)