import { Routes, Route } from "react-router-dom"
import { Home, UserDashboard, UserBody, UserTasks, UserMeetings, AdminBody, AdminDashboard, AdminUsers, AdminTasks, AdminMeetings, AddTaskForm, AddUserForm, AddMeetingForm } from "./pages/pages";

const App = () => {
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