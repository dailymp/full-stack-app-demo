import {ActionConstants} from "./ActionConstants";
import {TaskDTO} from "../domain/TaskDTO";

export interface ILoadTaskListAction {
    type: string;
    rows: Array<TaskDTO>;
}

export function  LoadTaskListAction(data: Array<TaskDTO>): ILoadTaskListAction {
    return {
        type: ActionConstants.LOAD_TASK_LIST,
        rows: data
    };
}