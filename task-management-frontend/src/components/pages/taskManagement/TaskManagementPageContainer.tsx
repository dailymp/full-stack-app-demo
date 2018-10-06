import {connect} from "react-redux";

import {
    TaskManagementPage, ITaskManagementDispatchProps,
    ITaskManagementPageProps
} from "./TaskManagementPage";

import * as React from "react";

import {IReducers} from "../../../reducers/IndexReducers";
import {InitializeTaskManagementPageAction} from "../../../actions/InitializeTaskManagementPageAction";
import {ItemCheckedAction} from "../../../actions/ItemCheckedAction";
import {NewItemTextAction} from "../../../actions/NewItemTextAction";
import {AddNewItemAction} from "../../../actions/AddNewItemAction";
import {DeleteTaskAction} from "../../../actions/DeleteTaskAction";


const mapStateToProps = (state: IReducers): ITaskManagementPageProps => ({
    taskManagementPage: state['reducers'].TaskManagementPageReducer._taskManagementPage
});

const mapDispatchToProps = (dispatch): ITaskManagementDispatchProps => ({
    initializePage: () => dispatch(InitializeTaskManagementPageAction()),
    itemChecked: (taskId: string, checked: boolean) => dispatch(ItemCheckedAction(taskId, checked)),
    newUserInputText: (newText: string) => dispatch(NewItemTextAction(newText)),
    addNewTask: () => dispatch(AddNewItemAction()),
    itemDeleted: (taskId:string) => dispatch(DeleteTaskAction(taskId))

});


export const TaskManagementPageContainer = connect<ITaskManagementPageProps, ITaskManagementDispatchProps, {}>(
    mapStateToProps,
    mapDispatchToProps
)(TaskManagementPage);