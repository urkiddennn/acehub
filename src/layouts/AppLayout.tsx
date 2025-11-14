// src/layouts/AppLayout.tsx

import React from "react";

export const AppLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* 🧭 Sidebar */}
      <aside className="w-64 bg-white shadow-md p-4">
        <h2 className="text-xl font-bold mb-6">Main App Nav</h2>
        <p>Dashboard Link</p>
        <p className="mt-2">(Logout button here)</p>
      </aside>

      {/* 💻 Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-green-600 text-white p-3 shadow-sm">
          <h1 className="text-lg">Main App Header</h1>
        </header>
        <main className="flex-1 p-8">
          {children} {/* Renders DashboardPage.tsx */}
        </main>
      </div>
    </div>
  );
};
