/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.task.bs;

import com.task.api.IConnectionDbBS;
import com.task.api.ITask;
import com.task.domain.TaskDTO;
import com.task.interfaces.ITaskDAO;
import java.util.List;
import javax.inject.Inject;
import javax.inject.Singleton;


@Singleton
public class TaskBS implements ITask {
    
    @Inject
    private IConnectionDbBS connectionDbBS;
    
    private ITaskDAO taskDAO;
    
    @Inject
    public void setDAO(ITaskDAO taskDAO) {
        this.taskDAO = taskDAO;
    }

    @Override
    public List<TaskDTO> getAllTasks() throws Exception {
        
        return taskDAO.getAllTasks(this.connectionDbBS.getConnectionDb());
          
    }
    
    @Override
    public TaskDTO getTaskById(String id) throws Exception {
        try {
            return this.taskDAO.getTaskById(id, this.connectionDbBS.getConnectionDb());
        } catch (Exception ex) {
            throw ex;
        } finally {

        }
    }  

    @Override
    public void insertTask(TaskDTO task) throws Exception {
        try {

            
            this.taskDAO.insertTask(task, this.connectionDbBS.getConnectionDb());

        } catch (Exception ex) {

            throw ex;

        } finally {

        }
    }

    @Override
    public void deleteTask(TaskDTO task) throws Exception {
        try {

            this.taskDAO.deleteTask(task, this.connectionDbBS.getConnectionDb());

        } catch (Exception ex) {

            throw ex;

        } finally {

        }
    }

    @Override
    public void updateTask(TaskDTO task) throws Exception {
       try {

            this.taskDAO.updateTask(task, this.connectionDbBS.getConnectionDb());

        } catch (Exception ex) {

            throw ex;

        } finally {

        }
    }
}