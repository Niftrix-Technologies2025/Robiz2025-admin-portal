import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { getProfile } from "../services/auth.service";
import { del } from "idb-keyval";

const ProtectedRoute = ({ children }) => {
    const [isAuth, setIsAuth] = useState(null);
    const location = useLocation();
    useEffect(() => {
        const checkAuth = async () => {
            try {
                const res = await getProfile();
                if (res.status === 200) setIsAuth(true);
                else {
                    setIsAuth(false);
                    await del("robiz_admin_details");
                }
            } catch {
                setIsAuth(false);
                await del("robiz_admin_details");
            }
        };
        checkAuth();
    }, [location.pathname]);

    if (isAuth === null) return null;
    if (!isAuth) {
        return <Navigate to="/auth/login" replace />;
    }
    return children;
};

export default ProtectedRoute;
