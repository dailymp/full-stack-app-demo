
package com.task.dao;

import com.task.domain.TaskDTO;
import com.task.interfaces.ITaskDAO;
import java.util.List;
import javax.enterprise.inject.Default;
import javax.inject.Singleton;
import org.bson.types.ObjectId;
import org.mongodb.morphia.Datastore;
import org.mongodb.morphia.dao.BasicDAO;

@Singleton
@Default
public class TaskDAO implements ITaskDAO {

    @Override
    public TaskDTO getTaskById(String id, Datastore connectionReference) throws Exception {
        return this.getBasicDAO(connectionReference).get(new ObjectId(id));
    }
    
    @Override
    public List<TaskDTO> getAllTasks(Datastore connectionReference) throws Exception {

        List<TaskDTO> taskListFound = null;

        taskListFound = this.getBasicDAO(connectionReference).find().asList();

        if (taskListFound.isEmpty()) {
            taskListFound = null;
        }

        return taskListFound;
    }
    
    @Override
    public void insertTask(TaskDTO task, Datastore connectionReference) throws Exception {
        this.getBasicDAO(connectionReference).save(task);
    }

    @Override
    public void deleteTask(TaskDTO task, Datastore connectionReference) throws Exception {
        this.getBasicDAO(connectionReference).delete(task);
    }

    @Override
    public void updateTask(TaskDTO task, Datastore connectionReference) throws Exception {
        this.getBasicDAO(connectionReference).getDatastore().merge(task);
    }

    private BasicDAO<TaskDTO, ObjectId> getBasicDAO(Datastore connectionReference) {
        BasicDAO<TaskDTO, ObjectId> basicDAO;
        basicDAO = new BasicDAO(TaskDTO.class, connectionReference);
        return basicDAO;
    }
}