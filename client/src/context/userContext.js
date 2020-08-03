import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser ] = useState({
        name: "John Smith",
        email: "john.smith@test.com",
        github: "www.github.com/j_smith",
        slack: "www.slack.com/j_smith",
        desiredRoles: ["UX","Front End"],
        hackNights: ["DTLA", "Westside"],
        availability: ["Mon PM", "Thurs PM"]
    });

    const [events, setEvents] = useState([
        {
            name: "VRMS Team Meeting",
            time: "04/13, 7PM",
            url: ""
        }
    ]);

    const [teams, setTeams ] = useState([
        {
            name: 'VRMS',
            status: 'Active'
        },
        {
            name: 'Where2Vote2018',
            status: 'Inactive'
        }
    ])

    const [logs, setLogs] = useState([
		{
			date_logged: "Mon Aug 03 2020 15:27:22 GMT-0700",
			log_category: "Development",
			log_hours: "3",
			log_notes: "Worked on front end"
		}
	])

    const removeOption = (category, optionToRemove) => {
        const updatedUser = { ...user }
        updatedUser[category] = user[category].filter(option => option !== optionToRemove);
        setUser(updatedUser);
    }

    return (
        <UserContext.Provider value={{ user, events, teams, logs, removeOption }}>
            { children }
        </UserContext.Provider>
    );
};

