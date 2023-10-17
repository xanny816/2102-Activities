import { useState } from "react";
import './style.css'

function ToDoList() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([
    {task: "Study DSA", id: crypto.randomUUID()},
    {task: "Research for OOP", id: crypto.randomUUID()},
    {task: "Sleep early pls", id: crypto.randomUUID()}
  ]);

  const handleAdd = () => {
    if(input !== ""){
      setList([...list, {task: input, id: crypto.randomUUID()}]);
    }
  }

  const handleRemove = (id) => {
    setList(list.filter(item => item.id !== id));
  }

  return (
    <>
      <div className="input-area">
        <input type="text" className="input-box" placeholder='Enter a task to do' onChange={(e) => setInput(e.target.value)}/>
        <button className="add-button" onClick={handleAdd}>Add</button>
      </div>

      <div className="container-fluid">
        <ul className="list-group">
          {list.map(item =>
            <div className="list-group-item d-flex w-100 justify-content-between" key={item.id}>
              <div>
                <input type="checkbox" className="form-check-input me-1"/>
                <label className="form-check-label">{item.task}</label>
              </div>
              <button className="remove-button" onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          )}
        </ul> 
      </div>
    </>
  );
}

export default ToDoList;