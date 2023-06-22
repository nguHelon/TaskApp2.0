import { avatar1, work1 } from "../../assets/assets"

const AddTaskForm = () => {
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
                    />
                    <input 
                        className="w-full h-[30px] outline-none border border-dimGray mb-3 pl-3 py-5 text-black rounded-md" type="text" placeholder="Task description"                       
                    />
                    <div  className="w-full flex flex-wrap m-5 space-x-1">
                        <div 
                            className="flex flex-col justify-center items-center"
                        >
                            <img 
                                src={avatar1} alt=""
                                className={`w-[50px] h-[50px] rounded-full cursor-pointer`}            
                            />
                            <span>Helon</span>
                        </div>
                    </div>
                    <button 
                        className="w-full h-auto outline-none border-none bg-primary text-white font-bold p-2 rounded-3xl"                        
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