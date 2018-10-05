import axios from "axios";

export class TaskManagementDAO {

    public constructor() {

    }


    public insertNewTask(taskName: string) {
        let url = 'http://mainakesystems.ddns.net:9032/task-rest-api/api/task';
        let body = {
            name: taskName,
            finished: false
        };

        return axios.post(url, body)
        .then((response) => {
            if (response) {
                return response.status;
            }
        }).catch((error) => {
            throw error;
        });
    }

    public searchTaskList() {
        let url = 'http://mainakesystems.ddns.net:9032/task-rest-api/api/task';

        return axios.get(url)
            .then((response) => {
                if (response) {
                    if (!response.data) {
                        return null;
                    } else {
                        return response.data;
                    }
                }
            }).catch((error) => {
                throw error;
            });
    }

    public updateTask(taskId: string, taskName: string, taskFinished: boolean) {
        let url = 'http://mainakesystems.ddns.net:9032/task-rest-api/api/task';
        let body = {
            id: taskId,
            name: taskName,
            finished: taskFinished
        };

        return axios.put(url, body)
            .then((response) => {
                if (response) {
                    return response.status;
                }
            }).catch((error) => {
                throw error;
            });
    }

    public deleteTask(taskId: string) {
        let url = 'http://mainakesystems.ddns.net:9032/task-rest-api/api/task/' + taskId;

        return axios.delete(url)
            .then((response) => {
                if (response) {
                    return response.status;
                }
            }).catch((error) => {
                throw error;
            });
    }
}