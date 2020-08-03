import React, { useEffect, useContext } from 'react';
import '../sass/UserProfile.scss';
import UserTable from '../components/presentational/profile/UserTable';
import UserEvents from '../components/presentational/profile/UserEvents';
import UserTeams from '../components/presentational/profile/UserTeams';
import { UserProvider, UserContext } from '../context/userContext';
import ActivityLogs from '../components/presentational/profile/ActivityLog';

const UserProfile = (props) => {
  const {
    user,
    setUser,
    setEvents,
    setTeams,
    removeOption,
    events,
    teams,
    logs,
  } = props.context;

  // IDs for api calls are hardcoded temporarily

  async function fetchUser() {
    try {
      await fetch("api/users/5ecdc8f8cef75e0017cf30e5")
        .then((res) => res.json())
        .then((data) => setUser(data));
    } catch (error) {
      console.log("Error fetching:", error);
    }
  }

  async function fetchEvents() {
    try {
      await fetch("api/events/5e4b162f70897038554acbec")
        .then((res) => res.json())
        .then((data) => {
          const eventsArr = [data];
          return eventsArr;
        })
        .then((eventsArr) => setEvents(eventsArr));
    } catch (error) {
      console.log("Error fetching:", error);
    }
  }

  async function fetchTeams() {
    try {
      await fetch("api/projects/5edeac78ce228b001778facd")
        .then((res) => res.json())
        .then((data) => {
          const teamsArr = [data];
          return teamsArr;
        })
        .then((teamsArr) => setTeams(teamsArr));
    } catch (error) {
      console.log("Error fetching:", error);
    }
  }

  async function getProfileInfo() {
    await fetchUser();
    await fetchEvents();
    await fetchTeams();
  }

  useEffect(() => {
    getProfileInfo();
  }, []);

  return (
    <div>
      <div className="profile__header">
        <h3 className="profile__title">My Profile</h3>
      </div>
      <UserTable context={{ user, removeOption }} />
      <div className="profile__header">
        <h3 className="profile__subtitle">My Upcoming Events</h3>
      </div>
      <UserEvents context={{ events }} />
      <div className="profile__header">
        <h3 className="profile__subtitle">My Teams</h3>
      </div>
      <UserTeams context={{ teams }} />
      <div className="profile__header">
        <h3 className="profile__subtitle">Activity Log</h3>
      </div>
      <ActivityLogs context={{ logs }} />
    </div>
  );
};

export default (function (WrappedComponent) {
  return (props) => {
    return (
      <UserProvider {...props}>
        <UserContext.Consumer>
          {(context) => <WrappedComponent context={context} />}
        </UserContext.Consumer>
      </UserProvider>
    );
  };
})(UserProfile);
