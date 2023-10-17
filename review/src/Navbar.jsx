import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <h1>Rox's Blog</h1>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/create" style={{
            color: "white",
            backgroundColor: "pink",
            borderRadius: "8px"
          }}>New Blog</Link>
        </div>
      </div>
    </>
  );
}
 
export default Navbar;