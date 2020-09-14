import React, { useEffect } from "react";
import "../sass/UserProfile.scss";
import UserTable from "../components/presentational/profile/UserTable";
import UserEvents from "../components/presentational/profile/UserEvents";
import UserTeams from "../components/presentational/profile/UserTeams";
import ActivityLog from "../components/presentational/profile/ActivityLog";
import { UserProvider, UserContext } from "../context/userContext";

const UserProfile = (props) => {
  const { user, setUser, removeOption, events, teams, logs } = props.context;
  useEffect(() => {
    fetch("api/users/5ecdc8f8cef75e0017cf30e5")
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.log("Error fetching:", err));
  }, []);

  console.log("user", user);

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
      <ActivityLog context={{ logs }} />
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
