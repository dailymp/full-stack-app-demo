package TaskBSTest;

import com.task.domain.TaskDTO;
import org.bson.types.ObjectId;

public class TaskDTOHelper {
    
    private TaskDTO taskDTOFirst;

    private TaskDTO taskDTOSecond;

    private TaskDTO taskDTOEmpty;

    public TaskDTOHelper() {
        this.taskDTOFirst = null;
        this.taskDTOSecond = null;
        this.taskDTOEmpty = null;
        initData();
    }

    private void initData() {
        initConfigurationFirst();
        initConfigurationSecond();
    }

    private void initConfigurationFirst() {
        this.taskDTOFirst = new TaskDTO();
        this.taskDTOFirst.setId(new ObjectId("587c901885e6d00f7e1960d5"));
        this.taskDTOFirst.setName("Hacer app para predicción");
        this.taskDTOFirst.setFinished(false);

    }

    private void initConfigurationSecond() {
        this.taskDTOSecond = new TaskDTO();
        this.taskDTOSecond.setId(new ObjectId("907f191e810c19729de860ea"));
        this.taskDTOSecond.setName("Programar tests con powermoockito");
    }

    public TaskDTO getTaskDTOfirst() {
        return this.taskDTOFirst;
    }

    public TaskDTO getTaskDTOsecond() {
        return this.taskDTOSecond;
    }

    public TaskDTO getTaskDTOempty() {
        return this.taskDTOEmpty;
    }
}