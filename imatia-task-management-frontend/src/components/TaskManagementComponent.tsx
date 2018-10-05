import * as React from "react";
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Checkbox from 'material-ui/Checkbox';
import Toggle from 'material-ui/Toggle';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {InputText} from "./input/InputText";
import {InputFloatingActionButton} from "./input/InputFloatingActionButton";
import {IconConstants} from "../common/IconConstants";
import {TaskDTO} from "../domain/TaskDTO";
import {InputIconButton} from "./input/InputIconButton";

export interface ITaskManagementComponentProps {
    taskList: Array<TaskDTO>;
    newItemText: string;


}

export interface ITaskManagementComponentDispatch {
    itemChecked: (taskId: string, checked: boolean) => any;
    newUserInputText: (newText: string) => any;
    addNewTask: () => any;
    itemDeleted: (taskId: string) => any;

}

export interface ITaskManagementState {

}

export class TaskManagementComponent extends React.Component<ITaskManagementComponentProps &
                                                             ITaskManagementComponentDispatch,
                                                             ITaskManagementState> {
    public constructor(props: ITaskManagementComponentProps & ITaskManagementComponentDispatch) {
        super (props);
    }

    public componentWillMount() {

    }

    private onChangeText(event: object, newValue: string) {

        this.props.newUserInputText(newValue);

    }

    private onClicked(event: any) {
        this.props.addNewTask();
    }



    private onDeleteClick(event: any){
        this.props.itemDeleted(event.target.id);
    }



    private viewCheck(e, checked) {
        this.props.itemChecked(e.target.name, checked);
    }



    private generateListItemsFromTaskList() {
        let listItems = [];

        if (this.props.taskList != null) {
            this.props.taskList.map((singleTask) => {
                if (singleTask._finished) {
                    listItems.push(
                                    <div className="row" key={singleTask._id}>
                                        <div className="col-xs-5 col-sm-6 col-md-8">
                                            <del key={singleTask._id}>
                                            <ListItem id={singleTask._id}
                                                      leftCheckbox={<Checkbox checked={singleTask._finished}
                                                                              name={singleTask._id}
                                                                              onCheck={this.viewCheck.bind(this)}/>}
                                                                              primaryText={singleTask._name}/>
                                            </del>
                                        </div>
                                        <div className="col-xs-2 col-sm-2 col-md-2">
                                            <InputIconButton
                                                iconName={IconConstants.ICON_DELETE}
                                                name={singleTask._id}
                                                onClicked={this.onDeleteClick.bind(this)} />
                                        </div>
                                    </div>
                    );
                } else {
                    listItems.push(<div className="row" key={singleTask._id}>
                                        <div className="col-xs-5 col-sm-6 col-md-8">
                                            <ListItem id={singleTask._id}
                                                     leftCheckbox={<Checkbox checked={singleTask._finished}
                                                                             name={singleTask._id}
                                                                             onCheck={this.viewCheck.bind(this)}/>}
                                                                             primaryText={singleTask._name}/>
                                        </div>
                                        <div className="col-xs-5 col-sm-2 col-md-2">
                                            <InputIconButton  iconName={IconConstants.ICON_DELETE}
                                                              name={singleTask._id}
                                                              onClicked={this.onDeleteClick.bind(this)} />
                                        </div>
                                   </div>
                    );
                }

            });
        }

        return listItems;
    }

    private getCurrentFinishedTasks(): number {
        if (this.props.taskList) {
            return this.props.taskList.filter(singleTask => singleTask._finished).length;
        }
    }

    private getCurrentPendingTasks(): number {
        if (this.props.taskList) {
            return this.props.taskList.filter(singleTask => !singleTask._finished).length;
        }
    }

    private getCurrentTotalTasks(): number {
        if (this.props.taskList) {
            return this.props.taskList.length;
        } else {
            return 0;
        }
    }


    public render() {

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-9 col-sm-6 col-md-4 col-lg-3">
                        <InputText hintText={"Task Name"}
                                   floatingLabelText={"New Task"}
                                   onChangeText={this.onChangeText.bind(this)}
                                   value={this.props.newItemText}
                                    />
                    </div>
                </div>

                <div className="row">
                    <div className="pull-left action-button">
                        <InputFloatingActionButton iconName={IconConstants.ICON_ADD}
                                                   onClicked={this.onClicked.bind(this)}/>
                    </div>
                   
                </div>

                <div className="row">
                    <div className="col-md-3">
                        <MuiThemeProvider>
                            <List>
                                <Subheader>
                                    <div>
                                        <div className="row">Total Tasks: {this.getCurrentTotalTasks()}</div>
                                        <div className="row">Pending Tasks: {this.getCurrentPendingTasks()}</div>
                                        <div className="row">Finished Tasks: {this.getCurrentFinishedTasks()}</div>
                                    </div>
                                </Subheader>
                                {this.generateListItemsFromTaskList()}
                            </List>
                        </MuiThemeProvider>
                    </div>
                </div>
            </div>
        );
    }
}