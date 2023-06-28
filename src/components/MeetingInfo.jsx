import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { meetingRemoved } from "../features/meetings/meetingsSlice";
import { allUsers } from "../features/users/usersSlice";

const MeetingInfo = ({ meetingId, date, description, attendants}) => {
  const dispatch = useDispatch();
  const users = useSelector(allUsers);
  const colors = ['bg-[#fff1d6]', 'bg-[#d1e7ff]', 'bg-[#ffd8da]', 'bg-[#d9ffe5]'];
  let random = Math.floor(Math.random() * 3);

  function handleRemovedMeeting() {
    dispatch(meetingRemoved(meetingId));
  }

  return (
    <div className={`w-[48%] rounded-2xl p-5 ml-3 mt-3 bg-[#d1e7ff] ${colors[random]}`}>
        <span className="text-textColor2 mb-4">{date}</span>
        <p className="Capitalize text-textColor2 font-bold mb-5">{description}</p>
        <div className="w-full flex justify-around items-start">
            {
                attendants.map((attendant) => {
                    return users.map((user) => {
                        if (attendant == user.id) {
                            return (
                                <img
                                    key={user.id}
                                    className="h-[50px] w-[50px] rounded-full" src={user.image} 
                                    alt="" 
                                />               
                            )
                        }
                    })
                })
            }                                   
        </div>
        <button 
            className="py-1 px-3 mt-5 text-md font-bold text-white rounded-md bg-textColor2"
            onClick={handleRemovedMeeting}
        >
            cancel meeting
        </button>
    </div>
  )
}

export default MeetingInfo