

const TaskAssignee = ({ taskId, name, selected, image, setTaskInfo, setAssignees}) => {

  function handleSelection() {
    setAssignees((prevUsers) => {
        setTaskInfo((prevInfo) => {
          return {...prevInfo, taskAssignee: taskId}
        })
        return prevUsers.map((user) => {
          return user.id == taskId ? {...user, selected: true} : {...user, selected: false};
        })
    })    
  }

  return (
    <div 
        className="flex flex-col justify-center items-center"
        onClick={handleSelection}
    >
        <img 
            src={image} alt=""
            className={`w-[50px] h-[50px] rounded-full cursor-pointer ${ selected ? 'border-4 border-primary' : 'opacity-40'}`}
        />
        <span>{name.split(" ")[1]}</span>
    </div>
  )
}

export default TaskAssignee