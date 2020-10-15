import React from "react";

const LogListItem = (props) => {
  const log = props.log;
  const { startDate, endDate, category, notes } = log;
  const minutes = 1000 * 60;
  const hours = minutes * 60;
  const timeDif = new Date(endDate).getTime() - new Date(startDate).getTime();
  const hoursDif = Math.round(timeDif / hours);
  const startTime = new Date(startDate).toLocaleDateString("en-US");

  return (
    <div className="LogListItem">
      <h3>{startTime}</h3>
      <p>Category: {category}</p>
      <p>Hours: {hoursDif}</p>
      <p>Notes: {notes}</p>
    </div>
  );
}

export default LogListItem;
