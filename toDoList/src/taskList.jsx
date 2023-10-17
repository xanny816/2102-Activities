const TaskList = ({list, handleRemove}) => {

  return ( 
    <>
      {list.length === 0? <div className="empty">No tasks to do :D</div>: 
        list.map(item => 
          <div className="task-preview" key={item.id}>
            <p>{item.task}</p>
            <div>
              <button onClick={() => handleRemove(item.id)}>remove</button>
            </div>
          </div>
        )
      }
    </>
   );
}
 
export default TaskList;