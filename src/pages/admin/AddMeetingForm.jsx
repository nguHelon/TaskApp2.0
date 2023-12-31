import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { work2 } from "../../assets/assets";
import { meetingAdded } from "../../features/meetings/meetingsSlice";
import { MeetingAttendants } from "../../components/components";
import { allUsers } from "../../features/users/usersSlice";
import { useNavigate } from "react-router-dom";

const AddMeetingForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector(allUsers);
  const [meetingInfo, setMeetingInfo] = useState({ name: '', description: '', date: '', attendants: []});
  const [attendants, setAttendants] = useState(users.map((user) => {
    return { ...user, selected: false}
  }));

  function handleAddMeeting() {
    const { name, description, date, attendants } = meetingInfo;
    dispatch(meetingAdded(name, description, date, attendants));

    navigate("../adminmeetings");
  }

  return (
    <section className="w-full h-[100vh] flex justify-center items-center bg-cover bg-center">
            <div className="w-[1000px] flex items-center justify-end rounded-xl relative boxShadow2 bg-[#11182b]">
                <img className="w-1/2 h-full rounded-l-xl absolute top-0 left-0" src={work2} alt="" />
                <div className="w-1/2 h-full p-5 text-dimWhite">
                    <div className="w-full px-[30px] pt-[15px] flex flex-col justify-center items-center text-center">
                        <div className="w-[50px] h-[50px] flex justify-center items-center rounded-full mb-3 bg-primary">
                            <i className="fa-solid fa-video"></i>
                        </div>
                        <h1 className="text-[22px] mb-2">Add New Meeting</h1>
                        <p className="text-dimGray mb-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, ipsum?</p>
                        <div className="w-full">
                            <input 
                                className="w-full h-[30px] outline-none border border-dimGray mb-3 pl-3 py-5 text-black rounded-md" type="text" placeholder="Meeting Name"
                                onChange={(e) => {
                                    setMeetingInfo((prevInfo) => {
                                        return { ...prevInfo, name: e.target.value}
                                    })
                                }}
                            />
                            <input 
                                className="w-full h-[30px] outline-none border border-dimGray mb-3 pl-3 py-5 text-black rounded-md" type="text" placeholder="Meeting description"
                                onChange={(e) => {
                                    setMeetingInfo((prevInfo) => {
                                        return { ...prevInfo, description: e.target.value}
                                    })
                                }}
                            />
                            <input 
                                className="w-full h-[30px] outline-none border border-dimGray mb-3 pl-3 py-5 text-black rounded-md" type="date" placeholder="Meeting description"
                                onChange={(e) => {
                                    setMeetingInfo((prevInfo) => {
                                        return { ...prevInfo, date: e.target.value}
                                    })
                                }}
                            />
                            <div  className="w-full flex flex-wrap m-5 space-x-1">
                                { users.length == 0 ?
                                    <p className="text-dimWhite font-bold">Go add some users first in dashboard page</p>
                                    :
                                    attendants.map((attendant) => {
                                        return <MeetingAttendants 
                                            key={attendant.id}
                                            id={attendant.id}
                                            name={attendant.name}
                                            image={attendant.image}
                                            selected={attendant.selected}
                                            attendants={attendants}
                                            setMeetingInfo={setMeetingInfo}
                                            setAttendants={setAttendants}
                                        />
                                    })
                                }
                            </div>
                            <button 
                                className="w-full h-auto outline-none border-none bg-primary text-white font-bold p-2 rounded-3xl"
                                onClick={handleAddMeeting}
                            >
                                Add Meeting
                            </button>
                            <p className="text-dimWhite font-bold mt-8">Made with 💗 by Ngu Helon.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default AddMeetingForm