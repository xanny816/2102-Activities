import React from "react";
import "./Elements.css";

function Grid({ data }) {
  return (
    <div className="d-flex justify-content-center flex-wrap">
      {data.map((item) => (
        <div key={item.id} className="p-2 information-box">
          <ul className="list">
            <li>ID: {item.id}</li>
            <li>Name: {item.Fname} {item.Lname}</li>
            <li>Age: {item.age}</li>
            <li>Course: {item.course}</li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Grid;
