import { useDispatch } from "react-redux"
import { tasksRemoved } from "../features/tasks/tasksSlice";


const TaskInfo = ({taskId, name, description}) => {
  const dispatch = useDispatch();

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
            </div>
        </div>
    </div> 
  )
}

export default TaskInfo