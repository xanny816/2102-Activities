import { useState } from 'react'
import { Students } from './studentList';
import './style.css'

function Search() {
  const [input, setInput] = useState("");

  return (
    <>
      <div className="input-area">
        <input type="text" className="input-box" placeholder='Enter ID Number' onChange={(e) => setInput(e.target.value)}/>
      </div>
      <div className="container-fluid">
        <div className='row row-cols-4 g-3'>
          {Students.filter(student => student.id.toString().includes(input)).map(student =>
            <div className="col" key={student.id}>
              <div className="card-style">
                <p>ID: {student.id}</p>
                <p>Name: {student.Fname} {student.Lname}</p>
                <p>Age: {student.age}</p>
                <p>Course: {student.course}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Search;