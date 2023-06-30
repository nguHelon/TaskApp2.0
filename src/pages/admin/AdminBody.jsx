import { Link } from "react-router-dom";
import { avatar } from "../../assets/assets";
import { useSelector } from "react-redux";
import { allUsers } from "../../features/users/usersSlice";
import { allTasks } from "../../features/tasks/tasksSlice";
import { allMeetings } from "../../features/meetings/meetingsSlice";

const AdminBody = () => {
  const users = useSelector(allUsers);
  const tasks = useSelector(allTasks);
  const meetings = useSelector(allMeetings);

  return (
    <div className="w-full h-auto">
      <div className="w-full h-auto flex items-center justify-between mb-3">
        <div className="h-12 w-12 rounded-full relative">
          <img className="w-full h-full rounded-full" src={avatar} alt="" />
          <span className="w-3 h-3 rounded-full absolute right-0 bottom-0 bg-green-500"></span>
        </div>
        <button className="buttonGradient1">Log Out</button>
      </div>
      <div className="w-full h-auto flex justify-between items-start">
        <div className="h-auto w-full">
          <div className="w-full py-5 text-left mb-4">
            <h1 className="text-3xl text-dimWhite font-bold">Hello Ngu Helon</h1>
            <p className="text-textColor2">Here is an overview of how the team is moving and you&rsquo;ve got some actions. 🙂 </p>
          </div>
          <div className="w-full h-auto p-4 rounded-2xl bg-[#11182b] containerBoxShadow">
            <div className="w-full h-auto pt-5 flex justify-between items-center space-x-12">
              
              <div className="w-full flex-1 mr-3">
                <h1 className="text-xl font-bold text-dimWhite">{tasks.filter(task => task.status == "in progress").length}</h1>
                <span className="text-textColor2">In progress</span>
              </div>
              
              <div className="h-[50px] w-[1px] bg-textColor"></div>
                
              <div className="w-full flex-1 mr-3">
                <h1 className="text-xl font-bold text-dimWhite">{tasks.filter(task => task.status == "completed").length}</h1>
                <span className="text-textColor2">Completed</span>
              </div>
              
              <div className="h-[50px] w-[1px] bg-textColor"></div>
                
              <div className="w-full flex-1 mr-3">
                <h1 className="text-xl font-bold text-dimWhite">{tasks.filter(task => task.status == "on hold").length}</h1>
                <span className="text-textColor2">On Hold</span>
              </div>
              
              <div className="h-[50px] w-[1px] bg-textColor"></div>
                
              <div className="w-full flex-1">
                <h1 className="text-xl font-bold text-dimWhite">{tasks.length}</h1>
                <span className="text-textColor2">Total Tasks</span>
              </div>
                            
            </div>

            <div className="w-full py-4 pt-7">
              <h1 className="text-dimWhite font-bold text-2xl mb-11">Overview</h1>
              <div className="w-full h-auto flex justify-around space-x-3">

                <div className="w-[30%] px-3 flex justify-center items-center flex-col rounded-xl py-4 btnShadow1">
                    <h1 className="text-xl text-dimWhite font-bold mb-5">ToTal Users</h1>
                    <div className="h-[150px] w-[150px] flex flex-col justify-center items-center rounded-full border-8 m-5">
                        <i className="fa-solid fa-users text-5xl text-dimWhite"></i>
                        <span className="font-bold text-textColor2 text-2xl">{users.length}</span>
                    </div>
                    <Link to="adduser">
                      <button className="outline-none border-none w-full py-2 rounded-[60px] text-white font-bold buttonGradient3">Add User <i className="fa-solid fa-plus"></i></button>
                    </Link>
                </div>

                <div className="w-[30%] px-3 flex justify-center items-center flex-col rounded-xl py-4 btnShadow1">
                    <h1 className="text-xl text-dimWhite font-bold mb-5">ToTal Meetings</h1>
                    <div className="h-[150px] w-[150px] flex flex-col justify-center items-center rounded-full border-8 m-5">
                        <i className="fa-solid fa-video text-5xl text-dimWhite"></i>
                        <span className="font-bold text-textColor2 text-2xl">{meetings.length}</span>
                    </div>
                    <Link to="addmeeting">
                      <button className="outline-none border-none w-full py-2 rounded-[60px] text-white font-bold buttonGradient4">Add Meeting <i className="fa-solid fa-plus"></i></button>
                    </Link>
                </div>

                <div className="w-[30%] px-3 flex justify-center items-center flex-col rounded-xl py-4 btnShadow1">
                    <h1 className="text-xl text-dimWhite font-bold mb-5">ToTal Tasks</h1>
                    <div className="h-[150px] w-[150px] flex flex-col justify-center items-center rounded-full border-8 m-5">
                        <i className="fa-solid fa-list-check text-5xl text-dimWhite"></i>
                        <span className="font-bold text-textColor2 text-2xl">{tasks.length}</span>
                    </div>
                    <Link to="addtask">
                      <button className="outline-none border-none w-full py-2 rounded-[60px] text-white font-bold buttonGradient5">Add Task <i className="fa-solid fa-plus"></i></button>
                    </Link>
                </div>

              </div>
            </div>

          </div>    
        </div>

      </div>
    </div>
  )
}

export default AdminBody