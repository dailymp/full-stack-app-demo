import {ActionConstants} from "./ActionConstants";

export interface  IDeleteTaskAction {
    type: string;
    taskId: string;
}

export function  DeleteTaskAction(taskId: string): IDeleteTaskAction {
    return {
        type: ActionConstants.DELETE_TASK_ACTION,
        taskId: taskId
    };
}