package TaskBSTest;

import com.task.domain.TaskDTO;
import java.util.ArrayList;
import java.util.List;

public class TaskBSHelper {

    private TaskDTOHelper taskDTOHelper;

    public TaskBSHelper() {
        this.taskDTOHelper = new TaskDTOHelper();
    }

    public List<TaskDTO> listOfTasksWithContent() {
        List<TaskDTO> currentListOfTasks = new ArrayList<>();
        currentListOfTasks.add(this.taskDTOHelper.getTaskDTOfirst());
        currentListOfTasks.add(this.taskDTOHelper.getTaskDTOsecond());
        return currentListOfTasks;
    }

    public List<TaskDTO> listOfTaskDTOWithoutContent() {
        List<TaskDTO> currenListOfTasks = new ArrayList<>();
        currenListOfTasks.add(this.taskDTOHelper.getTaskDTOempty());
        return currenListOfTasks;
    }
}
