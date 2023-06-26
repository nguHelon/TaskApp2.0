import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { allUsers } from "../../features/users/usersSlice"
import { tasksAdded } from "../../features/tasks/tasksSlice"
import TaskAssignee from "../../components/TaskAssignee"
import { work1 } from "../../assets/assets"

const AddTaskForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const users = useSelector(allUsers);
    const [taskInfo, setTaskInfo] = useState({name: '', description: '', taskAssignee: ''});
    const [assignees, setAssignees] = useState(users.map((user) => {
        return { ...user, selected: false}
    }));

    function handleAddTask() {
        const { name, description, taskAssignee } = taskInfo;
        dispatch(tasksAdded(name, description, taskAssignee));

        navigate('../admintasks');
    }
    
  return (
    <section className="w-full h-[100vh] flex justify-center items-center bg-cover bg-center bg-no-repeat">
    <div className="w-[1000px] flex items-center justify-end rounded-xl relative boxShadow2 bg-[#11182b]">
        <img className="w-1/2 h-full rounded-l-xl absolute top-0 left-0" src={work1} alt="" />
        <div className="w-1/2 h-full p-5 text-dimWhite">
            <div className="w-full px-[30px] pt-[15px] flex flex-col justify-center items-center text-center">
                <div className="w-[50px] h-[50px] flex justify-center items-center rounded-full mb-3 bg-primary">
                    <i className="fa-solid fa-briefcase"></i>
                </div>
                <h1 className="text-[22px] mb-2">Add New Task</h1>
                <p className="text-dimGray mb-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, ipsum?</p>                        
                <div className="w-full">
                    <input 
                        className="w-full h-[30px] outline-none border border-dimGray mb-3 pl-3 py-5 text-black rounded-md" type="text" placeholder="Task Name"
                        onChange={(e) => {
                            setTaskInfo((prevInfo) => {
                                return { ...prevInfo, name: e.target.value}
                            })
                        }}
                    />
                    <input 
                        className="w-full h-[30px] outline-none border border-dimGray mb-3 pl-3 py-5 text-black rounded-md" type="text" placeholder="Task description"    
                        onChange={(e) => {
                            setTaskInfo((prevInfo) => {
                                return { ...prevInfo, description: e.target.value}
                            })
                        }}                   
                    />
                    <div  className="w-full flex flex-wrap m-5 space-x-1">
                        {
                            assignees.map((assignee) => {
                                return <TaskAssignee 
                                    key={assignee.id}
                                    taskId={assignee.id}
                                    name={assignee.name}
                                    image={assignee.image}
                                    selected={assignee.selected}
                                    setTaskInfo={setTaskInfo}
                                    setAssignees={setAssignees}
                                />
                            })
                        }
                    </div>
                    <button 
                        className="w-full h-auto outline-none border-none bg-primary text-white font-bold p-2 rounded-3xl"
                        onClick={handleAddTask}
                    >
                        Add Task
                    </button>
                    <p className="text-dimWhite font-bold mt-8">Made with 💗 by Ngu Helon.</p>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default AddTaskForm