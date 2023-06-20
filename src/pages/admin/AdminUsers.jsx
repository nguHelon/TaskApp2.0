import { logo } from "../../assets/assets"


const AdminUsers = () => {
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
                        <div className="w-full h-auto p-3 bg-[#11182b] rounded-2xl containerBoxShadow">
                            <div className="w-full flex justify-between items-start mb-4">
                                <div className="flex items-center space-x-3">
                                    <img className="h-[50px] w-[50px] rounded-full" src={logo} alt="" />
                                    <span className="text-dimWhite text-xl font-bold">Ngu Helon</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="flex flex-col items-center justify-center">
                                        <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full border-4 border-blue-800 font-bold text-dimWhite">12</div>
                                        <span className="text-[12px] font-bold text-textColor2">In progress</span>
                                    </div>
                                    <div className="flex flex-col items-center justify-center">
                                        <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full border-4 border-green-400 font-bold text-dimWhite">12</div>
                                        <span className="text-[12px] font-bold text-textColor2">completed</span>
                                    </div>
                                    <div className="flex flex-col items-center justify-center">
                                        <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full border-4 border-red-500 font-bold text-dimWhite">14</div>
                                        <span className="text-[12px] font-bold text-textColor2">On Hold</span>
                                    </div>
                                    <div className="flex flex-col items-center justify-center">
                                        <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full border-4 border-gray-300 font-bold text-dimWhite">10</div>
                                        <span className="text-[12px] font-bold text-textColor2">Total Tasks</span>
                                    </div>
                                </div>
                            </div>
                            <button 
                                className="outline-none border-none py-1 px-2 rounded-[60px] bg-[#ee6b6e] text-white font-bold"                                
                            >
                                Remove
                            </button>
                        </div>                   
        </div>

    </div>
  )
}

export default AdminUsers