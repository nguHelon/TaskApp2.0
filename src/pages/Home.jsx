import { useState } from "react";
import { home, logo } from "../assets/assets";
import { AdminLogin, UserLogin } from "../components/components"

const Home = () => {
    const [login, setLogin] = useState(false);
    const [userLogin, setUserLogin] = useState(false);
    const [adminLogin, setAdminLogin] = useState(false);

  return (
    <div className="bg-primary w-full h-[100vh]">
        <div className="w-full flex justify-between items-center py-5 px-7">
            <img src={ logo } className="w-[150px] h-[50px]" alt="" />
            <button className="buttonGradient1">GitHub <i className="fa-brands fa-github"></i></button>
        </div>

        <div className=" w-full flex flex-col justify-center items-center">
            <img src={home} className="w-[800px] h-[550px]" alt="" />
            <div>                
                <div className="flex space-x-4">
                    <button 
                        className="px-[25px] py-[8px] text-center text-white font-bold rounded-[50px] bg-[#1b2b57] btnShadow1"
                        onClick={() => {
                            setLogin(true);
                            setUserLogin(true);
                        }}
                    >
                        User <i className="fa-solid fa-user"></i>
                    </button>
                    <button 
                        className="px-[25px] py-[8px] text-center text-black font-bold rounded-[50px] bg-white btnShadow1"
                        onClick={() => {
                            setLogin(true);
                            setAdminLogin(true);
                        }}
                    >
                        Admin <i className="fa-solid fa-bars-progress"></i>
                    </button>
                </div>
            </div>
        </div>

        { login &&
            <div className="fixed top-0 left-0 w-full h-[100vh] flex justify-center items-center">
                { adminLogin && <AdminLogin setAdminLogin={setAdminLogin} setLogin={setLogin} /> }
                { userLogin && <UserLogin setUserLogin={setUserLogin} setLogin={setLogin} />}
            </div>
        }
    </div>
  )
}

export default Home