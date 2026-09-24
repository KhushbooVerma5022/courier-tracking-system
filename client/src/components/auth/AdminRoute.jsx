import { Navigate, Outlet } from "react-router-dom";

function AdminRoute() {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));

    console.log("TOKEN:", token);
    console.log("USER:", user);
    console.log("ROLE:", user?.role);

    if (!token) {
        return <Navigate to="/login" replace />;
    }

    if (user?.role !== "admin") {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
}

export default AdminRoute;