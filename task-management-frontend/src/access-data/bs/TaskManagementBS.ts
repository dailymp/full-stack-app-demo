import {TaskManagementDAO} from "../dao/TaskManagementDAO";
import * as Q from "q";
import {TaskDTO} from "../../domain/TaskDTO";
import {store} from "../../components/AppPipeline";
import {HttpConstants} from "../../common/HttpConstants";
import {LoadTaskListAction} from "../../actions/LoadTaskListAction";

export class TaskManagementBS {
    public constructor() {

    }

    public searchTasks(): Q.IPromise<Array<TaskDTO>> {
        let taskManagementDAO: TaskManagementDAO;
        let deferred = Q.defer();
        let taskListInJson: any;

        try {

            taskManagementDAO = new TaskManagementDAO();
            taskManagementDAO.searchTaskList()
                .then((taskListFound) =>{
                    taskListInJson = taskListFound;
                })
                .then(() => {
                    this.mapIncomingTaskJsonToTask(taskListInJson)
                        .then((taskMappedObjectList) => {
                            deferred.resolve(taskMappedObjectList);
                        })
                });

        } catch(Exception) {
            throw Exception;
        }

        return deferred.promise;
    }

    private mapIncomingTaskJsonToTask(jsonIncomingMessage: any): Q.IPromise<Array<TaskDTO>> {
        let deferred = Q.defer();
        let singleTask: TaskDTO;
        let taskList: Array<TaskDTO>;

        taskList = new Array<TaskDTO>();

        if (jsonIncomingMessage != null) {
            jsonIncomingMessage.map((singleItem) => {
                singleTask = new TaskDTO();

                singleTask._id = singleItem.id;
                singleTask._name = singleItem.name;
                singleTask._finished = singleItem.finished;

                taskList.push(singleTask)
            });
        }

        deferred.resolve(taskList);

        return deferred.promise;
    }


    public insertNewTask(taskName: string) {
        let taskManagementDAO: TaskManagementDAO;

        try {
            taskManagementDAO = new TaskManagementDAO();
            taskManagementDAO.insertNewTask(taskName)
                .then((statusCode) => {
                    if (statusCode == HttpConstants.HTTP_RESPONSE_CODE_201) {
                        this.searchTasks()
                            .then((taskListFound) => {
                                store.dispatch(LoadTaskListAction(taskListFound));
                            });
                    }
                });

        } catch(Exception) {
            throw Exception;
        }
    }

    public updateTask(taskId: string, taskName: string, taskFinished: boolean ) {
        let taskManagementDAO: TaskManagementDAO;

        try {
            taskManagementDAO = new TaskManagementDAO();
            taskManagementDAO.updateTask(taskId, taskName, taskFinished)
                .then((statusCode) => {
                    if (statusCode == HttpConstants.HTTP_RESPONSE_CODE_200) {
                        this.searchTasks()
                            .then((taskListFound) => {
                                store.dispatch(LoadTaskListAction(taskListFound));
                            });
                    }
                });

        } catch(Exception) {
            throw Exception;
        }
    }

    public deleteTask(taskId: string ) {
        let taskManagementDAO: TaskManagementDAO;

        try {
            taskManagementDAO = new TaskManagementDAO();
            taskManagementDAO.deleteTask(taskId)
                .then((statusCode) => {
                    if (statusCode == HttpConstants.HTTP_RESPONSE_CODE_200) {
                        this.searchTasks()
                            .then((taskListFound) => {
                                store.dispatch(LoadTaskListAction(taskListFound));
                            });
                    }
                });

        } catch(Exception) {
            throw Exception;
        }
    }
}