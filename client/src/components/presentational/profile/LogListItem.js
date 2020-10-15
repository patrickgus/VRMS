import React from "react";

const LogListItem = (props) => {
  const log = props.log;
  const { startDate, category, notes } = log;
  const startTime = new Date(startDate).toLocaleDateString("en-US");
  
  return (
    <div className="LogListItem">
      <h3>{startTime}</h3>
      <p>Category: {category}</p>
      <p>Hours: N/A</p>
      <p>Notes: {notes}</p>
    </div>
  );
}

export default LogListItem;
