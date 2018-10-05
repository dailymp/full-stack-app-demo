import {LoadTaskListAction} from "./LoadTaskListAction";
import { TaskManagementBS } from "../access-data/bs/TaskManagementBS";

export function  InitializeTaskManagementPageAction() {
    let taskManagementBS: TaskManagementBS;

    taskManagementBS = new TaskManagementBS();

    return function(dispatch) {
        taskManagementBS.searchTasks()
            .then((taskList) => {
                dispatch(LoadTaskListAction(taskList));
            });
    }
}