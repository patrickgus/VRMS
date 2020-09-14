import React from "react";
import moment from "moment";

const ActivityLogs = ({ context }) => {
  const { logs } = context;
  console.log("logs", logs);

  return (
    <>
      {logs
        ? logs.map((log) => (
            <div className="ActivityLog">
              {" "}
              <h3>{moment(log.date_logged).format("MM-DD-YYYY")}</h3>
              <p>Category: {log.log_category}</p>
              <p>Hours: {log.log_hours}</p>
              <p>Notes: {log.log_notes}</p>
            </div>
          ))
        : ""}
    </>
  );
};

export default ActivityLogs;
