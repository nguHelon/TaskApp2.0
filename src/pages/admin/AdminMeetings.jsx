import { useSelector } from "react-redux"
import { allMeetings } from "../../features/meetings/meetingsSlice"
import { MeetingInfo } from "../../components/components";


const AdminMeetings = () => {
  const meetings = useSelector(allMeetings);

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
        {
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