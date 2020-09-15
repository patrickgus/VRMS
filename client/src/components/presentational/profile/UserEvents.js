import React from "react";
import moment from "moment";

const UserEvents = ({ context }) => {
  const { events } = context;

  return (
    <div className="user-events">
      <table className="user-data">
        <tbody>
          <tr>
            <th className="user-data__header">Event</th>
            <th className="user-data__header">Date/Time</th>
            <th className="user-data__header">Link</th>
          </tr>

          {events
            ? events.map((event, index) => (
                <tr key={index}>
                  <td className="user-data__info">{event.name}</td>
                  <td className="user-data__info">
                    {moment(event.date).format("M/YY hA")}
                  </td>
                  <td className="user-data__info">{event.url}</td>
                </tr>
              ))
            : ""}
        </tbody>
      </table>
    </div>
  );
};

export default UserEvents;
