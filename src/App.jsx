import { useEffect } from "react";
import { Routes, Route } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { Home, UserDashboard, UserBody, UserTasks, UserMeetings, AdminBody, AdminDashboard, AdminUsers, AdminTasks, AdminMeetings, AddTaskForm, AddUserForm, AddMeetingForm } from "./pages/pages";
import { allMeetings, meetingsLoaded } from "./features/meetings/meetingsSlice";
import { allTasks, tasksLoaded } from "./features/tasks/tasksSlice"
import { allUsers, usersLoaded } from "./features/users/usersSlice";

const App = () => {
  const dispatch = useDispatch();
  const meetings = useSelector(allMeetings);
  const users = useSelector(allUsers);
  const tasks = useSelector(allTasks);

  useEffect(() => {
    const appData = localStorage.getItem("store") == null ? { users: [], tasks: [], meetings: [] } : JSON.parse(localStorage.getItem("store"));    
    
    dispatch(meetingsLoaded(appData.meetings));
    dispatch(usersLoaded(appData.users));
    dispatch(tasksLoaded(appData.tasks));
    
  }, [dispatch]);

  useEffect(() => {
    const appData = localStorage.getItem("store") == null ? { users: [], tasks: [], meetings: [] } : JSON.parse(localStorage.getItem("store")); 

    if (localStorage.getItem("store") == null){
      localStorage.setItem("store", JSON.stringify({ users: [], tasks: [], meetings: [] }))
    } else if (meetings.length != 0) {
      localStorage.setItem("store", JSON.stringify({...appData, meetings: meetings}));
      dispatch(meetingsLoaded(meetings))
    } else if (users.length != 0) {
      localStorage.setItem("store", JSON.stringify({...appData, users: users}));
      dispatch(usersLoaded(users));
      console.log(appData.users)
    } else if (tasks.length != 0) {
      localStorage.setItem("store", JSON.stringify({...appData, tasks: tasks}));
      dispatch(tasksLoaded(tasks))
    }

  }, [meetings, users, tasks, dispatch])

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/userdashboard" element={<UserDashboard />}>
        <Route index element={<UserBody />} />
        <Route path="tasks" element={<UserTasks />} />
        <Route path="meetings" element={<UserMeetings />} />
      </Route>
      <Route path="/admindashboard" element={<AdminDashboard />} >
        <Route index element={<AdminBody />} />
        <Route path="adminusers" element={<AdminUsers />} />
        <Route path="admintasks" element={<AdminTasks />} />
        <Route path="adminmeetings" element={<AdminMeetings />} />
        <Route path="adduser" element={<AddUserForm />} />
        <Route path="addtask" element={<AddTaskForm />} />
        <Route path="addmeeting" element={<AddMeetingForm />} />
      </Route>
    </Routes>
  )
}

export default App