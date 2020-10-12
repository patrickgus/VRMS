import React from "react";
import moment from "moment";

const ActivityLog = (log) => {
  const startTime = moment(log.startDate).format("MM-DD-YYYY");
  const endTime = moment(log.endDate).format("MM-DD-YYYY");
  // const hours = moment.duration(endTime.diff(startTime, "hours"));

  // console.log(log);

  return (
    <div className="ActivityLog">
      {" "}
      <h3>{startTime}</h3>
      <p>Category: {log.category}</p>
      <p>Hours: N/A</p>
      <p>Notes: {log.notes}</p>
    </div>
  );
};

export default ActivityLog;
