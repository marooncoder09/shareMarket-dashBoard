import { Navigate } from "react-router-dom";
import useAuth from "../hooks/use-auth.jsx";

export default function PrivateRoute({ children }) {
    const { currentUser } = useAuth();

    if(!currentUser) {
        return <Navigate to="/login" replace />
    }

    return children;
}