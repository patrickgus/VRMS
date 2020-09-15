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
          {/* <tr>
                        <th className="user-data__header">Github</th>
                        <td className="user-data__info">{user.github}</td>
                    </tr>  */}

          {user.currentRole ? (
            <tr>
              <th className="user-data__header">Current Role</th>
              <td className="user-data__info user-data__info--flex">
                <ProfileOption
                  option={user.currentRole}
                  removeOption={() => removeOption("currentRole", user.currentRole)}
                />
              </td>
            </tr>
          ) : (
            ""
          )}

          {/* {user.slack ?    
                    (<tr>
                        <th className="user-data__header">Slack</th>
                        <td className="user-data__info">{user.slack}</td>
                    </tr>):("")} */}

          {user.desiredRole ? (
            <tr>
              <th className="user-data__header">Desired Role</th>
              <td className="user-data__info user-data__info--flex">
                <ProfileOption
                  option={user.desiredRole}
                  removeOption={() => removeOption("desiredRole", user.desiredRole)}
                />
              </td>
            </tr>
          ) : (
            ""
          )}

          {/* {user.hackNights ? 
                        (<tr>
                            <th className="user-data__header">My Hack Nights</th>
                            <td className="user-data__info user-data__info--flex">
                                {user.hackNights.map((option, index)=>(<ProfileOption key={index} option={option} removeOption={()=>removeOption("hackNights", option)}/>))}
                            </td>
                        </tr>):("")}
                        
                    {user.availability ? 
                        (<tr>
                            <th className="user-data__header">Availability</th>
                            <td className="user-data__info user-data__info--flex">
                                {user.availability.map((option, index)=>(<ProfileOption key={index} option={option} removeOption={()=>removeOption("availability", option)}/>))}
                            </td>
                        </tr>):("")} */}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
