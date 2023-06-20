import { Routes, Route } from "react-router-dom"
import { Home, UserDashboard, UserBody, UserTasks, UserMeetings, AdminBody, AdminDashboard, AdminUsers } from "./pages/pages";

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
      </Route>
    </Routes>
  )
}

export default App