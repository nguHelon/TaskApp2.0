import { useDispatch } from "react-redux"
import { userRemoved } from "../features/users/usersSlice";

const UserInfo = ({ userId, image, name, task }) => {
  const dispatch = useDispatch();

  function handleRemoveUser(userId) {
    dispatch(userRemoved(userId));
  }

  return (
    <div className="w-full h-auto p-3 bg-[#11182b] rounded-2xl containerBoxShadow">
        <div className="w-full flex justify-between items-start mb-4">
            <div className="flex items-center space-x-3">
                <img className="h-[50px] w-[50px] rounded-full" src={`${image}`} alt="" />
                <span className="text-dimWhite text-xl font-bold">{name}</span>
            </div>
            <div className="flex items-center space-x-3">
                <div className="flex flex-col items-center justify-center">
                    <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full border-4 border-blue-800 font-bold text-dimWhite">{task.inProgress}</div>
                    <span className="text-[12px] font-bold text-textColor2">In Progress</span>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full border-4 border-green-400 font-bold text-dimWhite">{task.completed}</div>
                    <span className="text-[12px] font-bold text-textColor2">completed</span>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full border-4 border-red-500 font-bold text-dimWhite">{task.onHold}</div>
                    <span className="text-[12px] font-bold text-textColor2">on Hold</span>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full border-4 border-gray-300 font-bold text-dimWhite">{task.totalTasks}</div>
                    <span className="text-[12px] font-bold text-textColor2">totol Tasks</span>
                </div>
            </div>
        </div>
        <button 
            className="outline-none border-none py-1 px-2 rounded-[60px] bg-[#ee6b6e] text-white font-bold"
            onClick={() => {
                handleRemoveUser(userId);
            }}                          
        >
            Remove
        </button>
    </div>
  )
}

export default UserInfo