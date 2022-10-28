import React from "react";
import { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Contexts/UserContext";
const PrivateRoute = ({ children }) => {
    const { user, loading } = useState(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div>loading.....</div>;
    }
    if (!user) {
        return (
            <Navigate to="/login" state={{ from: location }} replace></Navigate>
        );
    }

    return children;
};

export default PrivateRoute;
