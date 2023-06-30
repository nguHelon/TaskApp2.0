import { useSelector } from "react-redux"
import { allUsers } from "../../features/users/usersSlice"
import { UserInfo } from "../../components/components";


const AdminUsers = () => {
  const users = useSelector(allUsers);

  return (
    <div className="w-full min-h-[100vh]">

        <div className="w-full flex items-start justify-center mb-10">
            <input 
                className="w-10/12 h-10 rounded-[60px] pl-3 outline-none font-[600] text-dimWhite bg-[#11182b] containerBoxShadow" type="text" placeholder="Search users"               
            />
        </div>

        <div className="w-full py-5 text-left mb-4">
            <h1 className="text-3xl text-dimWhite font-bold">All Users</h1>
            <p className="text-textColor2">Here is a summary of how the team members are doing so far with the work they have. 🙂 </p>
        </div>

        <div className="w-full h-auto space-y-5">          
            { users.length == 0 ? 
                <p className="text-dimWhite">No users yet. Go add some now 🚀 in the dashboard page.  </p>
                :
                users.map((user) => {
                    return <UserInfo 
                        key={user.id}
                        userId={user.id}
                        name={user.name}
                        task={user.task}
                        image={user.image}
                    />
                }) 
            }               
        </div>

    </div>
  )
}

export default AdminUsers