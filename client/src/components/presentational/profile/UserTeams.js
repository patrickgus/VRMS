import React from 'react';

const UserTeams = ({ context }) => {
    const { teams } = context;
    console.log("teams", teams);

    return (
        <div className="user-events">
            <table className="user-data">
                <tbody>
                    <tr>
                        <th className="user-data__header">Team</th>
                        <th className="user-data__header">Status</th>
                    </tr>
                    {teams ? teams.map((team,index) => 
                        (<tr key={index}>
                            <td className="user-data__info">{team.name}</td>
                        <td className={`user-data__info user-data__info--${team.projectStatus.toLowerCase()}`}>{team.projectStatus}</td>
                        </tr>)) 
                    : ("")}
                </tbody>
            </table>
        </div>
    );
}

export default UserTeams;