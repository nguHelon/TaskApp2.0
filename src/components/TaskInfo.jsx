import { useDispatch } from "react-redux"
import { tasksRemoved } from "../features/tasks/tasksSlice";
import { useSelector } from "react-redux";
import { allUsers } from "../features/users/usersSlice";


const TaskInfo = ({taskId, name, description, status, taskAssignee}) => {
  const dispatch = useDispatch();
  const users = useSelector(allUsers);
  const assignee = users.filter((user) => user.id == taskAssignee)[0];

  function handleRemoveTask(taskId) {
    dispatch(tasksRemoved(taskId));
  }

  return (
    <div className="w-[48%] rounded-2xl border border-[#333e64] flex justify-between items-center p-2 ml-3 mt-3 space-x-2">                  
        <div>
            <h1 className="text-textColor2 font-bold">{name}</h1>
            <p className="text-textColor mb-4">{description}</p>
            <div className="w-full flex items-start justify-start space-x-1">
                <button 
                    className="py-1 px-2 rounded-[60px] outline-none border-none text-[14px] bg-[#ee6b6e] text-white font-bold"
                    onClick={() => {
                        handleRemoveTask(taskId);
                    }}                               
                >
                    remove tasks
                </button>
                <button
                    className="py-1 px-2 rounded-[60px] outline-none text-[14px] text-white border-2 border-white font-bold mr-4"
                >
                    {status}
                </button>
            </div>
        </div>
        <div className="flex flex-col items-center justify-center">
            <img src={assignee.image} className="w-[50px] h-[50px] rounded-full cursor-pointer" alt="" />
            <span className="font-bold text-dimWhite">{assignee.name.split(" ")[0]}</span>
        </div>
    </div> 
  )
}

export default TaskInfo