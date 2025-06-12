// App.jsx
import { BrowserRouter, Routes, Route, useNavigate, useRoutes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import ProtectedLayout from "./ProtectedLayout";
import Login from "auth/Login";
import Dashboard from "dashboard/Dashboard";
import Notification from "notifications/Notification";
import Users from "users/Users";
import Profile from "profile/Profile";
import Materiels from "materiels/Materiels";
import { useAuth } from "auth/AuthContext";

function AppRoute() {
  const {logout, user} = useAuth();
  const navigate = useNavigate(); 
  return (
      <Routes>
        <Route path="/" element={<Login onLogged={() => {navigate('app/dashboard')}} />} />

        {/* Routes publiques */}
        <Route path="/login" element={<Login onLogged={() => {navigate('app/dashboard')}}/>} />

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
          {user?.role==="admin" && <Route path="Utilisateurs" element={<Users />} />}
          <Route path="Materiels" element={<Materiels />} />
          <Route path="Mon_compte" element={<Profile user={{nom: user?.username || '', role: user?.role || ''}} onLogout={() => {logout(); navigate('/')}}/>} />
          <Route path="*" element={<Dashboard/>} />
        </Route>
      </Routes>
  );
}
export default AppRoute;
