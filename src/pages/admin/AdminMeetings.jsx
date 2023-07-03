import { useSelector } from "react-redux"
import { allMeetings } from "../../features/meetings/meetingsSlice"
import { MeetingInfo } from "../../components/components";
import { useEffect } from "react";


const AdminMeetings = () => {
  const meetings = useSelector(allMeetings);

  // useEffect(() => {
  //   const appData = localStorage.getItem("store") == null ? { users: [], tasks: [], meetings: [] } : JSON.parse(localStorage.getItem("store"));

  //   localStorage.setItem("store", JSON.stringify({...appData, meetings: meetings}));
  // }, [meetings])

  return (
    <div className="w-full min-h-[100vh]">
    <div className="w-full flex items-start justify-center mb-10">
        <input className="w-10/12 h-10 rounded-[60px] pl-3 outline-none font-[600] bg-[#11182b] text-dimWhite containerBoxShadow" type="text" placeholder="Search Tasks"/>
    </div>

    <div className="w-full py-5 text-left mb-4">
        <h1 className="text-3xl text-dimWhite font-bold">All meetings</h1>
        <p className="text-textColor2">You can see all the meetings below that have been planned with their descriptions. 🙂 </p>
    </div>

    <div className="w-full bg-[#11182b] rounded-2xl p-3 containerBoxShadow">
      <h1 className="text-2xl text-dimWhite font-bold mb-8">Meetings Schedule</h1>
      <div className="w-full h-auto flex space-y-3 space-x-3 flex-wrap">            
        { meetings.length == 0 ? 
          <p className="text-dimWhite">GO add some meetings now 🚀 in the dashboard page.</p>
          :
          meetings.map(meeting => {
            return <MeetingInfo 
              key={meeting.id}
              meetingId={meeting.id}
              date={meeting.date}
              description={meeting.description}
              attendants={meeting.attendants}
            />
          })
        }                          
      </div>
    </div>
</div>
  )
}

export default AdminMeetings