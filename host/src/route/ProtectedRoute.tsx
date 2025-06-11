import { Navigate } from 'react-router-dom';
import { useAuth } from 'auth/AuthContext';
import React from 'react';
import './ProtectedLayout.css';

const ProtectedRoute = ({ children } : { children : React.ReactNode }) => {
    const {isAuthenticated} = useAuth();
    if (!true) {
        return <Navigate to="/login" />;
    }
    return children;
};

export default ProtectedRoute;
