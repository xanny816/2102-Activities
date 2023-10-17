import { useState } from "react";
import { Students } from "./data";
import Grid from "./Grid";
import "./App.css";
import "./Elements.css";

function App() {
  const [input, setInput] = useState("");

  const search = (data) => {
    return data.filter((item) => item.id.toString().includes(input));
  }
  
  return (
    <>
      <input
        type="text"
        className="search-bar"
        placeholder="ID number"
        onChange={(event) => setInput(event.target.value)}
      />

      <Grid data={search(Students)}></Grid>
    </>
  );
}

export default App;
