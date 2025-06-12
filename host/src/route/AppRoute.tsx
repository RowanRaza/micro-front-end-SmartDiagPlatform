// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import ProtectedLayout from './ProtectedLayout';
import Login from "auth/Login";
import Dashboard from "dashboard/Dashboard";
import Notification from "notifications/Notification";
import Users from "users/Users";

function AppRoute() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes publiques */}
        <Route path="/login" element={<Login />} />

        {/* Routes protégées dans un layout avec sidebar */}
        <Route
          path="/app"
          element={
            <ProtectedRoute>
              <ProtectedLayout />
            </ProtectedRoute>
          }
        >
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Notifications" element={<Notification />} />
          <Route path="Utilisateurs" element={<Users />} />
          <Route path="*" element={<>La route n'existe pas encore</>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoute;
