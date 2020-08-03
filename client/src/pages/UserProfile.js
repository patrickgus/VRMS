import React, { useEffect, useContext } from 'react';
import '../sass/UserProfile.scss';
import UserTable from '../components/presentational/profile/UserTable';
import UserEvents from '../components/presentational/profile/UserEvents';
import UserTeams from '../components/presentational/profile/UserTeams';
import { UserProvider, UserContext } from '../context/userContext';
import ActivityLogs from '../components/presentational/profile/ActivityLog';

const UserProfile = () => {
  const context = useContext(UserContext);
  const { setUser } = context;

  async function getUser() {
    try {
      const user = await fetch(
        "/api/users/5f13818fcce25dfc3357382d"
      );
      const userJson = await user.json();
      setUser(userJson);
    } catch (error) {
      console.log(error);
    }
  }

  async function getProfileInfo() {
    await getUser();
  }

  useEffect(() => {
    getProfileInfo();
  }, []);

  return (
    <UserProvider>
      <div>
        <div className="profile__header">
          <h3 className="profile__title">My Profile</h3>
        </div>
        <UserContext.Consumer>
          {({ user, removeOption }) => (
            <UserTable context={{ user, removeOption }} />
          )}
        </UserContext.Consumer>
        <div className="profile__header">
          <h3 className="profile__subtitle">My Upcoming Events</h3>
        </div>
        <UserContext.Consumer>
          {({ events }) => <UserEvents context={{ events }} />}
        </UserContext.Consumer>
        <div className="profile__header">
          <h3 className="profile__subtitle">My Teams</h3>
        </div>
        <UserContext.Consumer>
          {({ teams }) => <UserTeams context={{ teams }} />}
        </UserContext.Consumer>
        <div className="profile__header">
          <h3 className="profile__subtitle">Activity Log</h3>
        </div>
        <UserContext.Consumer>
          {({ logs }) => <ActivityLogs context={{ logs }} />}
        </UserContext.Consumer>
      </div>
    </UserProvider>
  );
};

export default UserProfile;
