
const UserLogin = ({ setLogin, setUserLogin}) => {
  return (
    <div className="w-[500px] h-auto p-5 bg-[#1b2b57] rounded-2xl btnShadow1">
        <div className="w-full px-[30px] pt-[15px] flex flex-col justify-center items-center text-center">
            <div 
                className="w-[50px] h-[50px] flex justify-center items-center rounded-full mb-3 bg-[#0b1124] cursor-pointer"
                onClick={() => {
                    setUserLogin(false);
                    setLogin(false);
                }}
            >
                <i className="fa-solid fa-xmark text-white font-bold text-3xl "></i>
            </div>
            <h1 className="text-[22px] mb-2 text-white font-bold">Hello! 👋  Welcome!</h1>
            <p className="text-dimGray mb-7 text-dimWhite">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, ipsum?</p>
            <div className="w-full">
                <input 
                    className="w-full h-[30px] outline-none border border-dimGray mb-3 pl-3 py-5 rounded-md" 
                    type="text" 
                    placeholder="name"                                                             
                />
                <input 
                    className="w-full h-[30px] outline-none border border-dimGray mb-3 pl-3 py-5 rounded-md" 
                    type="password"
                    placeholder="password"                                
                />
                <button 
                    className="w-full h-auto outline-none border-none bg-[#0b1124] text-white font-bold p-2 rounded-3xl"
                >
                    Log In
                </button>
                
                <p className="text-white mt-8 font-bold">Made with 💗 by Ngu Helon.</p>
            </div>
        </div>
    </div>
  )
}

export default UserLogin