import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    name: {
      firstName: "",
      lastName: "",
    },
    email: "",
    github: "",
    slack: "",
    desiredRole: "",
    hackNights: [],
    availability: [],
  });

  const [events, setEvents] = useState([
    {
      name: "VRMS Team Meeting",
      time: "04/13, 7PM",
      url: "",
    },
  ]);

  const [teams, setTeams] = useState([
    {
      name: "VRMS",
      status: "Active",
    },
    {
      name: "Where2Vote2018",
      status: "Inactive",
    },
  ]);

  const [logs, setLogs] = useState([
    {
      date_logged: "Mon Aug 03 2020 15:27:22 GMT-0700",
      log_category: "Development",
      log_hours: "3",
      log_notes: "Worked on front end",
    },
  ]);

  const removeOption = (category, optionToRemove) => {
    const updatedUser = { ...user };
    updatedUser[category] = user[category].filter(
      (option) => option !== optionToRemove
    );
    setUser(updatedUser);
  };

  return (
    <UserContext.Provider
      value={{ user, events, teams, logs, setUser, removeOption }}
    >
      {children}
    </UserContext.Provider>
  );
};
