import { TaskInfo } from "../../components/components";
import { useSelector } from "react-redux";
import { allTasks } from "../../features/tasks/tasksSlice";

const AdminTasks = () => {
  const tasks = useSelector(allTasks)

  return (
    <div className="w-full min-h-[100vh]">
        <div className="w-full flex items-start justify-center mb-10">
            <input className="w-10/12 h-10 rounded-[60px] bg-[#11182b] pl-3 outline-none font-[600] text-dimWhite containerBoxShadow" type="text" placeholder="Search Tasks"/>
        </div>

        <div className="w-full py-5 text-left mb-4">
            <h1 className="text-3xl text-dimWhite font-bold">All tasks</h1>
            <p className="text-textColor2">You can see all the tasks below that have been planned with their descriptions. 🙂 </p>
        </div>

        <div className="max-w-full h-auto py-5 rounded-2xl bg-[#11182b] flex items-center space-x-3 space-y-3 flex-wrap containerBoxShadow">            
            { tasks.length == 0 ? 
                <p className="text-dimWhite ml-2">GO add some tasks now 🚀 in the dashboard page</p>
                :
                tasks.map((task) => {
                    return <TaskInfo 
                        key={task.id}
                        taskId={task.id}
                        name={task.name}
                        description={task.description}
                        status={task.status}
                        taskAssignee={task.taskAssignee}
                    />
                }) 
            }           
        </div>

    </div>
  )
}

export default AdminTasks