import { useState } from 'react'
import ContactList from './ContactList';
import AddSection from './AddSection';

function App() {
  const [contactList, setContactList] = useState([
    {name: "Roxanne Lopez", age: "20", contactNo: "09198228550", course: "BS-CS", id: "111111"},
    {name: "Clybel Bonachita", age: "21", contactNo: "09816482673", course: "BS-IT", id: "222222"},
    {name: "Simone Montanez", age: "19", contactNo: "09517362756", course: "BS-IS", id: "333333"}
  ]);

  const [input, setInput] = useState({});

  const handleRemove = (id) => {
    const temp = contactList.find((contact) => contact.id == id);
    setContactList(contactList.filter((contact) => contact.id !== id));
    return temp;
  }

  const handleAdd = (e) => {
    const temp = contactList.filter((contact) => contact.id === input.id);
    temp.length === 0? setContactList([...contactList, input]): undefined;
    e.preventDefault();
  }

  const handleUpdate = (id) => {
    const temp = handleRemove(id);
    setInput(temp);
  }

  return (
    <>
      <div className="content">
        <div className="header">
          <h1>Contact Book</h1>
        </div>

        <div className="main-body">
          <ContactList contactList = {contactList} handleRemove = {handleRemove} handleUpdate = {handleUpdate}></ContactList>
        </div>

        <AddSection input = {input} setInput = {setInput} handleAdd = {handleAdd}></AddSection>
      </div>
    </>
  )
}

export default App;