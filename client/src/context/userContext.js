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
      name: "",
      date: "",
      url: "",
    },
  ]);

  const [teams, setTeams] = useState([
    {
      name: "",
      projectStatus: "",
    }
  ]);

  const [logs, setLogs] = useState([
    {
      category: "",
      notes: "",
      startDate: "",
      endDate: "",
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
      value={{ user, events, teams, logs, setUser, setEvents, setTeams, setLogs, removeOption }}
    >
      {children}
    </UserContext.Provider>
  );
};
