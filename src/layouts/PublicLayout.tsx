// src/layouts/PublicLayout.tsx

import React from "react";

export const PublicLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    // Minimal structure for a login screen
    <div className="min-h-screen flex justify-center items-center bg-blue-50">
      {children} {/* Renders LoginPage.tsx */}
    </div>
  );
};
