// src/pages/DashboardPage.tsx

import React from "react";

const DashboardPage: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded shadow">
      <h1 className="text-3xl font-bold mb-4">✅ Dashboard Content</h1>
      <p>
        This page is wrapped by the **AppLayout** (with the sidebar and header).
      </p>
      <p>Welcome, Authenticated User!</p>
    </div>
  );
};

export default DashboardPage;
