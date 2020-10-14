import React from "react";
import moment from "moment";

const ActivityLog = (log) => {
  const { startDate, endDate, category, notes } = log;
  let startTime = new Date(startDate).toLocaleDateString("en-US");
  let endTime = new Date(endDate).toLocaleDateString("en-US");
  // console.log("startDate", startDate);
  // console.log("endTime", endTime);

  let minutes = 1000 * 60;
  let hours = minutes * 60;
  let timeDif = new Date(endTime).getTime() - new Date(startTime).getTime();
  let hoursDif = Math.round(timeDif / hours);
  // console.log("hours", hoursDif);
  // console.log("log", log);

  return (
    <div className="ActivityLog">
      {" "}
      <h3>{moment(startDate).format("MM-DD-YYYY")}</h3>
      <p>Category: {category}</p>
      <p>Hours: N/A</p>
      <p>Notes: {notes}</p>
    </div>
  );
};

export default ActivityLog;
