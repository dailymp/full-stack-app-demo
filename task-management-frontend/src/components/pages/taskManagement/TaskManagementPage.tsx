import * as React from "react";
import {MessagesConstants} from "../../../i18n/MessagesConstants";

import {TaskManagementComponent} from "../../TaskManagementComponent";
import {TaskManagementPageDTO} from "../../../domain/TaskManagementPageDTO";


export interface ITaskManagementPageProps {
    taskManagementPage: TaskManagementPageDTO;
}

export interface ITaskManagementDispatchProps {
    initializePage: () => any;
    itemChecked: (taskId: string, checked: boolean) => any;
    newUserInputText: (newText: string) => any;
    addNewTask: () => any;
    itemDeleted: (taskId:string) => any;

}

export interface IClinicalTrialMaintenancePageState {

}



export class TaskManagementPage extends React.Component<ITaskManagementPageProps &
                                                        ITaskManagementDispatchProps,
                                                        IClinicalTrialMaintenancePageState> {

    public constructor(props: ITaskManagementPageProps &
                              ITaskManagementDispatchProps) {
        super(props);
    }

    public componentWillMount() {
        this.props.initializePage();
    }

    public render() {

      return (
          <div className="container-fluid">
              <div className="well">
                    <h4>{MessagesConstants.TASK_MANAGEMENT_MAINTENANCE}</h4>
              </div>
              <div className="row">
                  <TaskManagementComponent taskList={this.props.taskManagementPage._taskManagementList}
                                           itemChecked={this.props.itemChecked.bind(this)}
                                           newUserInputText={this.props.newUserInputText.bind(this)}
                                           newItemText={this.props.taskManagementPage._currentNewItemText}
                                           addNewTask={this.props.addNewTask.bind(this)}
                                           itemDeleted={this.props.itemDeleted.bind(this)}
                  />
              </div>
          </div>
        );
    }
}