import React from "react";
import ProfileOption from "../profile/ProfileOption";

const UserTable = ({ context }) => {
  const { user, removeOption } = context;

  return (
    <div className="user-info">
      <table className="user-data">
        <tbody>
          <tr>
            <th className="user-data__header">Name</th>
            <td className="user-data__info user-data">
              {user.name.firstName + " " + user.name.lastName}
            </td>
          </tr>
          <tr>
            <th className="user-data__header">Email</th>
            <td className="user-data__info">{user.email}</td>
          </tr>

          {user.currentRole ? (
            <tr>
              <th className="user-data__header">Current Role</th>
              <td className="user-data__info user-data__info--flex">
                <ProfileOption
                  option={user.currentRole}
                  removeOption={() =>
                    removeOption("currentRole", user.currentRole)
                  }
                />
              </td>
            </tr>
          ) : (
            ""
          )}

          {user.desiredRole ? (
            <tr>
              <th className="user-data__header">Desired Role</th>
              <td className="user-data__info user-data__info--flex">
                <ProfileOption
                  option={user.desiredRole}
                  removeOption={() =>
                    removeOption("desiredRole", user.desiredRole)
                  }
                />
              </td>
            </tr>
          ) : (
            ""
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
