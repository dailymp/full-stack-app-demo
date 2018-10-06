
package com.task.interfaces;

import com.task.domain.TaskDTO;
import java.util.List;
import org.mongodb.morphia.Datastore;

public interface ITaskDAO {
    public TaskDTO getTaskById(String id, Datastore connectionReference) throws Exception;
    public List<TaskDTO> getAllTasks (Datastore connectionReference)     throws Exception;
    public void insertTask(TaskDTO task, Datastore connectionReference) throws Exception;
    public void deleteTask(TaskDTO task, Datastore connectionReference) throws Exception;
    public void updateTask(TaskDTO task, Datastore connectionReference) throws Exception;
}
