import { useState } from 'react'
import TaskList from './taskList';

function App() {
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);

  const handleAdd = () => {
    if(input !== ''){
      setList([...list, {task: input, id: crypto.randomUUID()}]);
    }
  }

  const handleRemove = (id) => {
    setList(list.filter(item => item.id !== id));
  }

  return (
    <>
      <div className='content'>
        <div className="header">
          <h2>To-Do List</h2>
          <div>
            <input type="text" placeholder='Enter your task here' className='input-box' onChange={(e) => setInput(e.target.value)}/>
            <button onClick={handleAdd}>Add</button>
          </div>
        </div>

        <TaskList list = {list} handleRemove = {handleRemove}/>
      </div>
    </>
  )
}

export default App
