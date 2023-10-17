function AddSection ({input, setInput, handleAdd}) {

  return (
    <>
      <h2 className='form-section-title'>Add Contact</h2>
      <form className="form-section" onSubmit={handleAdd}>
        <div>
          <div className='input-area'>
            <label>Full Name</label>
            <input type="text" value={input.name ?? ""} onChange={(e) => setInput({...input, name: e.target.value})}/>
          </div>
          <div className='input-area'>
            <label>Age</label>
            <input type="text" value={input.age ?? ""} onChange={(e) => setInput({...input, age: e.target.value})}/>
          </div>
          <div className='input-area'>
            <label>Contact Number</label>
            <input type="text" value={input.contactNo ?? ""} onChange={(e) => setInput({...input, contactNo: e.target.value})}/>
          </div>
        </div>
        <div>
          <div className='input-area'>
            <label>Course</label>
            <input type="text " value={input.course ?? ""} onChange={(e) => setInput({...input, course: e.target.value})}/>
          </div>
          <div className='input-area'>
            <label>ID Number</label>
            <input type="text" value={input.id ?? ""} onChange={(e) => setInput({...input, id: e.target.value})}/>
          </div>
          <button type="submit" className='submit-button'>Submit</button>
        </div>   
      </form>
    </>

  );
}

export default AddSection;