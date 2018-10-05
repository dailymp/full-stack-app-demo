import * as objectAssign from "object-assign";
import {Action} from 'redux';
import {TaskManagementPageDTO} from "../domain/TaskManagementPageDTO";
import {ActionConstants} from "../actions/ActionConstants";
import {TaskManagementBS} from "../access-data/bs/TaskManagementBS";

export class TaskManagementPageState {
    public _taskManagementPage: TaskManagementPageDTO;

    public constructor() {
        this._taskManagementPage = new TaskManagementPageDTO();
        this._taskManagementPage._currentNewItemText = "";
    }
}

export function TaskManagementPageReducer(state: TaskManagementPageState = new TaskManagementPageState(), action: Action): TaskManagementPageState {
    let newState: TaskManagementPageState;
    let newPage: TaskManagementPageDTO;
    let taskManagementBS: TaskManagementBS;
    let taskId: any;
    let taskIndexId: number;

    taskManagementBS = new TaskManagementBS();


    switch(action.type) {
        case ActionConstants.LOAD_TASK_LIST:
            newPage = objectAssign({}, state._taskManagementPage, {});

            newPage._taskManagementList = action['rows'];

            newState = objectAssign({}, state, {_taskManagementPage: newPage});

            return newState;
        case ActionConstants.ITEM_CHECK_ACTION:
            taskId = action['itemId'];
            let checked = action['checked'];


            newPage = objectAssign({}, state._taskManagementPage, {});

            taskIndexId = newPage._taskManagementList.findIndex(itemTask => itemTask._id == taskId);

            newPage._taskManagementList[taskIndexId]._finished = checked;

            newState = objectAssign({}, state, {_taskManagementPage: newPage});

            taskManagementBS.updateTask(newPage._taskManagementList[taskIndexId]._id,
                                        newPage._taskManagementList[taskIndexId]._name,
                                        newPage._taskManagementList[taskIndexId]._finished);

            return newState;
        case ActionConstants.NEW_ITEM_TEXT_ACTION:
            newPage = objectAssign({}, state._taskManagementPage, {});

            newPage._currentNewItemText = action['newText'];

            newState = objectAssign({}, state, {_taskManagementPage: newPage});

            return newState;
        case ActionConstants.ADD_NEW_ITEM_ACTION:
            newPage = objectAssign({}, state._taskManagementPage, {});

            taskManagementBS.insertNewTask(newPage._currentNewItemText);

            return state;
        case ActionConstants.DELETE_TASK_ACTION:
            taskId = action['taskId'];

            newPage = objectAssign({}, state._taskManagementPage, {});

            taskManagementBS.deleteTask(taskId);

            return state;

        default:
            return state;
    }
}