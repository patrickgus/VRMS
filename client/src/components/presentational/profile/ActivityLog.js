import React from "react";

const ActivityLog = (log) => {
  console.log("log", log);
  const { startDate, endDate, category, notes } = log;
  const startTime = new Date(startDate).toLocaleDateString("en-US");
  console.log("startDate", startDate);

  const minutes = 1000 * 60;
  const hours = minutes * 60;
  const timeDif = new Date(endDate).getTime() - new Date(startDate).getTime();
  const hoursDif = Math.round(timeDif / hours);

  return (
    <div className="ActivityLog">
      {" "}
      <h3>{startTime}</h3>
      <p>Category: {category}</p>
      <p>Hours: {hoursDif}</p>
      <p>Notes: {notes}</p>
    </div>
  );
};

export default ActivityLog;
