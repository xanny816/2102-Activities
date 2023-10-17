import { useState } from 'react'
import {BrowserRouter, Route, Link, Routes, NavLink} from 'react-router-dom'
import ToDoList from './pages/ToDoList'
import Search from './pages/Search'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const Protected = ({isLoggedIn, children}) => {
    if(isLoggedIn == true){
      return(
        <>
          {children}
        </>
      );
    } else {
      return <p className='error-message'>You are not signed in D:</p>;
    }
  }

  return (
    <>
      <BrowserRouter>
        <div className="content">
          <div className="header">
            <h1>Routing</h1>
            <div>
              <NavLink to="/to-do-list" className="links">To-do List</NavLink>
              <NavLink to="/search-student" className="links">Student list</NavLink>
              <button className='sign-in-button' onClick={() => setIsLoggedIn(!isLoggedIn)}>{isLoggedIn == true? "Sign out": "Sign in"}</button>
            </div>
          </div>
          <Routes>
            <Route path="/to-do-list" element={
              <Protected isLoggedIn={isLoggedIn}>
                <ToDoList/>
              </Protected>
            }/>
            <Route path="/search-student" element={
              <Protected isLoggedIn={isLoggedIn}>
                <Search/>
              </Protected>
            }/>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App

