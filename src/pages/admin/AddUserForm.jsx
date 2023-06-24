import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { avatar, avatar1, avatar2, avatar3, avatar4, avatar8, avatar9, avatar10, avatar11, avatar12, avatar13, avatar14, avatar15, work3 } from "../../assets/assets"
import { UserAvatar } from "../../components/components"
import { userAdded } from "../../features/users/usersSlice";
import { nanoid } from "@reduxjs/toolkit";


const AddUserForm = () => {
    const [avatars, setAvatars] = useState([
        {id: 0, avatar: avatar, selected: false}, 
        {id: 1, avatar: avatar1, selected: false}, 
        {id: 2, avatar: avatar2, selected: false}, 
        {id: 3, avatar: avatar3, selected: false}, 
        {id: 4, avatar: avatar4, selected: false}, 
        {id: 5, avatar: avatar8, selected: false}, 
        {id: 6, avatar: avatar9, selected: false}, 
        {id: 7, avatar: avatar10, selected: false}, 
        {id: 8, avatar: avatar11, selected: false}, 
        {id: 9, avatar: avatar12, selected: false}, 
        {id: 10, avatar: avatar13, selected: false}, 
        {id: 11, avatar: avatar14, selected: false}, 
        {id: 12, avatar: avatar15, selected: false}
    ]);

  const [userInfo, setUserInfo] = useState({id: nanoid(), name: '', password: '', image: ''});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleAdduser() {
    const { id, name, password, image } = userInfo;
    dispatch(userAdded(id, name, password, image));

    navigate('../adminusers');
  }

  console.log(userAdded)

  return (
    <section className="w-full h-[100vh] flex justify-center items-center bg-cover bg-center">
    <div className="w-[1000px] flex items-center justify-end rounded-xl relative boxShadow2 bg-[#11182b]">
        <img className="w-1/2 h-full rounded-l-xl absolute top-0 left-0" src={work3} alt="" />
        <div className="w-1/2 h-full p-5 text-dimWhite">
            <div className="w-full px-[30px] pt-[15px] flex flex-col justify-center items-center text-center">
                <div className="w-[50px] h-[50px] flex justify-center items-center rounded-full mb-3 bg-primary">
                  <i className="fa-solid fa-user"></i>
                </div>
                <h1 className="text-[22px] mb-2">Add New User</h1>
                <p className="text-dimGray mb-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, ipsum?</p>
                <div className="w-full">
                    <input 
                        className="w-full h-[30px] outline-none border border-dimGray mb-3 pl-3 py-5 text-black rounded-md" type="text" placeholder="User Name"    
                        value={userInfo.name}
                        onChange={(e) => {
                            setUserInfo((prevInfo) => {
                                return {...prevInfo, name: e.target.value}
                            })
                        }}
                    />
                    <input 
                        className="w-full h-[30px] outline-none border border-dimGray mb-3 pl-3 py-5 text-black rounded-md" type="password"
                        placeholder="password"
                        value={userInfo.password}     
                        onChange={(e) => {
                            setUserInfo((prevInfo) => {
                                return {...prevInfo, password: e.target.value}
                            })
                        }}
                    />
                    <p className="text-textColor2 font-bold">Select Avatar</p>
                    <div className="w-full flex flex-wrap m-5 space-x-1">
                        {
                            avatars.map(avatar => (
                                <UserAvatar 
                                    key={avatar.id}
                                    id={avatar.id}
                                    image={avatar.avatar}
                                    selected={avatar.selected}
                                    setAvatars={setAvatars}
                                    setUserInfo={setUserInfo}
                                />
                            ))
                        }                      
                    </div>
                    <button 
                        className="w-full h-auto outline-none border-none bg-primary text-white font-bold p-2 rounded-3xl"
                        onClick={() => {
                            handleAdduser();
                        }}             
                    >
                        Add User
                    </button>
                    <p className="text-dimWhite font-bold mt-8">Made with 💗 by Ngu Helon.</p>
                </div>                        
            </div>
        </div>
    </div>
</section>
  )
}

export default AddUserForm;