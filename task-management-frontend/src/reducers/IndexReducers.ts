import {combineReducers} from "redux";
import {TaskManagementPageReducer, TaskManagementPageState} from "./TaskManagementPageReducer";

export default combineReducers<IReducers>({
    TaskManagementPageReducer,
});

export interface IReducers {
    TaskManagementPageReducer: TaskManagementPageState;
}