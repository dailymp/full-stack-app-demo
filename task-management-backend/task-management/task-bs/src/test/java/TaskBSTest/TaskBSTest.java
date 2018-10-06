package TaskBSTest;

import com.task.bs.ConnectionDbBS;
import com.task.bs.TaskBS;
import com.task.dao.TaskDAO;
import com.task.domain.TaskDTO;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.*;
import org.mongodb.morphia.Datastore;
import org.powermock.core.classloader.annotations.PrepareForTest;
import org.powermock.modules.junit4.PowerMockRunner;
import java.util.ArrayList;
import java.util.List;
import static org.junit.Assert.assertTrue;
import static org.mockito.Mockito.*;
import static org.mockito.Mockito.when;




@RunWith(PowerMockRunner.class)
@PrepareForTest(TaskBS.class)
public class TaskBSTest {

    @Mock
    private TaskDAO taskDAO;

    @Mock
    private ConnectionDbBS connectionDbBS;

    @InjectMocks
    private TaskBS taskBS;

    List<TaskDTO> taskDTOListWithContent = new ArrayList<>();
    List<TaskDTO> taskDTOListWithoutContent = new ArrayList<>();

    private static TaskBSHelper taskBSHelper;
    private static Datastore datastore;

    @BeforeClass
    public static void setUpClass() throws Exception {
        taskBSHelper = new TaskBSHelper();
    }

    @Before
    public void setUp() throws Exception {
        MockitoAnnotations.initMocks(this);
        taskDTOListWithContent = taskBSHelper.listOfTasksWithContent();
        taskDTOListWithoutContent = taskBSHelper.listOfTaskDTOWithoutContent();
        datastore = mock(Datastore.class);
        this.initMocks();
    }


    @Test
    public void testTasksWithElementsInside() throws Exception {
        List<TaskDTO> list = taskBS.getAllTasks();
        assertTrue(list.equals(taskDTOListWithContent));
    }

    private void initMocks() throws Exception {
        when(this.taskDAO.getAllTasks(this.connectionDbBS.getConnectionDb()))
                .thenReturn(taskDTOListWithContent);
    }
    
}