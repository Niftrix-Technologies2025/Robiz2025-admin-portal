import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getProfile } from "../services/auth.service";
import LoadingItem from "../components/LoadingItem";
import { del } from "idb-keyval";
const PublicRoute = ({ children }) => {
    const navigate = useNavigate();
    const [isChecking, setIsChecking] = useState(true);
    const [shouldRender, setShouldRender] = useState(false);
    useEffect(() => {
        const checkAuth = async () => {
            try {
                const res = await getProfile();
                if (res.status === 200) {
                    navigate("/main-dashboard", { replace: true });
                } else {
                    setShouldRender(true);
                }
            } catch (err) {
                console.error("Authentication check failed:", err);
                await del("userDetails");
                setShouldRender(true);
            } finally {
                setIsChecking(false);
            }
        };
        checkAuth();
    }, [navigate]);
    if (isChecking) {
        return <LoadingItem />;
    }
    if (!shouldRender) {
        return null;
    }
    return children;
};

export default PublicRoute;
