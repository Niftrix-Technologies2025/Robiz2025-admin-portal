import { Outlet } from "react-router-dom";
import PublicRoute from "../wrappers/PublicRoute";
const PublicLayout = () => {
    return (
        <PublicRoute>
            <Outlet />
        </PublicRoute>
    );
};

export default PublicLayout;
