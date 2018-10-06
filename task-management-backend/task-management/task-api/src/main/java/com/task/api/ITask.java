package com.task.api;

import com.task.domain.TaskDTO;
import java.util.List;

public interface ITask {
    public List<TaskDTO> getAllTasks() throws Exception;
    public TaskDTO getTaskById(String id) throws Exception;
    public void insertTask(TaskDTO task) throws Exception;
    public void deleteTask(TaskDTO task) throws Exception;
    public void updateTask(TaskDTO task) throws Exception;
}