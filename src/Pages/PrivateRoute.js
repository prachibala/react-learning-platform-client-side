import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Contexts/UserContext";
const PrivateRoute = ({ children }) => {
    const { user } = useState(AuthContext);
    if (!user) {
        return <Navigate to="/login"></Navigate>;
    }
    return children;
};

export default PrivateRoute;
