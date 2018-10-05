import {TaskDTO} from "./TaskDTO";

export class TaskManagementPageDTO {
    public _taskManagementList: Array<TaskDTO>;
    public _currentNewItemText: string;

    public constructor() {
        this._taskManagementList = null;
        this._currentNewItemText = null;
    }
}