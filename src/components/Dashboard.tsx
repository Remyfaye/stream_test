import React, { useState, useEffect } from "react";

interface DashboardProps {
  token: string | null;
  setToken: (token: string | null) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ token, setToken }) => {
  const [activityLog, setActivityLog] = useState<string[]>([]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  const logActivity = (activity: string) => {
    setActivityLog((prev) => [...prev, activity]);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    logActivity(`User typed: ${e.target.value}`);
  };

  const handleButtonClick = () => {
    logActivity("Button clicked!");
  };

  useEffect(() => {
    if (!token) {
      alert("Please sign in to view the dashboard.");
    }
  }, [token]);

  return (
    <div className="text-white">
      <h2>Dashboard</h2>
      <input
        type="text"
        placeholder="Type something"
        onChange={handleInputChange}
      />
      <button onClick={handleButtonClick}>Click Me</button>
      <button onClick={handleLogout}>Logout</button>

      <div className="activity-log">
        <h3>User Activity:</h3>
        <ul>
          {activityLog.map((log, index) => (
            <li key={index}>{log}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
