import React from 'react';
import LogListItem from './LogListItem';

const ActivityLog = ({ context }) => {
  const { logs } = context;

  const renderLogs = () => {
    return logs.map((log) => <LogListItem key={log._id} log={log} />);
  };

  return <div className="ActivityLog">{renderLogs()}</div>;
};

export default ActivityLog;
