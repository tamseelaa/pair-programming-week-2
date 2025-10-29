import React from "react";

function IdCard({ lastName, firstName, gender, height, birth, picture }) {
  return (
    <div style={{ border: "1px solid black", padding: "10px", display: "flex", marginBottom: "10px" }}>
      <img src={picture} alt={`${firstName} ${lastName}`} style={{ width: "100px", marginRight: "10px" }} />
      <div>
        <p>First name: {firstName}</p>
        <p>Last name: {lastName}</p>
        <p>Gender: {gender}</p>
        <p>Height: {height} cm</p>
        <p>Birth: {birth.toDateString()}</p>
      </div>
    </div>
  );
}

export default IdCard;
