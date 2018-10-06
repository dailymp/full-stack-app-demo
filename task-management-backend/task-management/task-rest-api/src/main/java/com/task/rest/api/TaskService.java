package com.task.rest.api;

import com.task.api.ITask;
import com.task.domain.TaskDTO;

import java.util.List;
import javax.inject.Inject;
import javax.inject.Singleton;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Singleton
@Path("/task")
public class TaskService {

    private ITask taskBS;
    
    @Inject
    public void setTaskBS(ITask taskBS) {
        this.taskBS = taskBS;
    }
    
    @GET
    @Path("{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getTask(@PathParam("id") String id) {
        Response response;
        TaskDTO task;
        try {

            task = taskBS.getTaskById(id);

            if (task == null) {
                response = Response.status(Response.Status.NOT_FOUND).build();
            } else {
                response = Response.status(Response.Status.OK).entity(task).build();
            }
        } catch (Exception ex) {
            response = Response.status(Response.Status.INTERNAL_SERVER_ERROR).build();
        }

        return response;
    }

    @GET    
    @Produces(MediaType.APPLICATION_JSON)
    public Response listAllTasks() {
        
        Response response;
        List<TaskDTO> listasks;
                
        try {            
            listasks = taskBS.getAllTasks();
            response = Response.status(Response.Status.OK).entity(listasks).build();
        } catch (Exception ex) {
            response = Response.status(Response.Status.INTERNAL_SERVER_ERROR).build();
        }
        return response;        
    }

    @POST   
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response insertTask(TaskDTO task) throws Exception {
        Response response;        

        try {
            taskBS.insertTask(task);
            response = Response.status(Response.Status.CREATED).entity(task).build();
        }

        catch (Exception ex) {
            response = Response.status(Response.Status.INTERNAL_SERVER_ERROR).build();
        }
        return response;
    }

    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response updateTask(TaskDTO task) {
        Response response;        
        
        try {
                taskBS.updateTask(task);
                response = Response.status(Response.Status.OK).entity(task).build();
        }

        catch (Exception ex) {
            response = Response.status(Response.Status.INTERNAL_SERVER_ERROR).build();
        }
        return response;
    }

    @DELETE
    @Path("{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response deleteTask(@PathParam("id") String id) {
        Response response;
        TaskDTO task;

        try {
            task = taskBS.getTaskById(id);

            if (task == null) {
                response = Response.status(Response.Status.NOT_FOUND).build();
            } else {
                taskBS.deleteTask(task);
                response = Response.status(Response.Status.OK).entity(task).build();
            }

        } catch (Exception ex) {
            response = Response.status(Response.Status.INTERNAL_SERVER_ERROR).build();
        }
        
        return response;
    }
}