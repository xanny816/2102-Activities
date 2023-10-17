function ContactList ({contactList, handleRemove, handleUpdate}) {
  return (
    <>
      {contactList.length === 0? <p className="empty">No contacts D:</p>: contactList.map(contact => (
          <div className='contact-preview' key={contact.id}>
            <div>
              <p>Name: {contact.name}</p>
              <p>Age: {contact.age}</p>
              <p>Contact No: {contact.contactNo}</p>
            </div>
            <div>
              <p>Course: {contact.course}</p>
              <p>ID: {contact.id}</p>
            </div>
            <button className="remove-button" onClick={() => handleUpdate(contact.id)}>Edit</button>
            <button className='remove-button' onClick={() => handleRemove(contact.id)}>Remove</button>
          </div>
        ))}
    </>
  );
}

export default ContactList;