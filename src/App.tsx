// src/App.tsx

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import { AppLayout } from "./layouts/AppLayout";
import { PublicLayout } from "./layouts/PublicLayout";

import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";

// --- Wrapper Components ---

// Wraps pages that should use the PublicLayout (e.g., Login)
const PublicRouteWrapper = () => (
  <PublicLayout>
    <Outlet />
  </PublicLayout>
);

// Wraps pages that should use the AppLayout (e.g., Dashboard)
const AuthenticatedRouteWrapper = () => (
  <AppLayout>
    <Outlet />
  </AppLayout>
);

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Route for Login: Uses the Public (Minimal) Layout */}
        <Route element={<PublicRouteWrapper />}>
          <Route path="/" element={<LoginPage />} />
          {/* Note: We use '/' here for the initial login page */}
        </Route>

        {/* Route for Dashboard: Uses the App (Full UI) Layout */}
        <Route element={<AuthenticatedRouteWrapper />}>
          <Route path="/dashboard" element={<DashboardPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
