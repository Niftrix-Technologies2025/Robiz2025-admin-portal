import { TbLogout2 } from "react-icons/tb";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { del } from "idb-keyval";
import { logoutService } from "../services/auth.service";
import CustomModal from "./modals/CustomModal";

const Logout = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const handleLogout = async () => {
        try {
            setIsLoading(true);
            const res = await logoutService();
            if (res.status === 200) {
                await del("robiz_admin_details");
                setIsLoading(false);
                navigate("/auth/login");
            }
        } catch (err) {
            console.error("Logout failed:", err);
            setIsLoading(false);
        }
    };
    return (
        <>
            <TbLogout2
                className="w-[20px] h-[20px] cursor-pointer"
                title="Logout"
                onClick={() => {
                    setIsOpen(true);
                }}
            />
            {isOpen && (
                <CustomModal
                    primaryText={"CONFIRM LOGOUT"}
                    secondaryText={"Are you sure you want to Logout?"}
                    positiveText={"YES"}
                    negativeText={"NO"}
                    isOpen={isOpen}
                    onRequestClose={() => setIsOpen(false)}
                    onClick={handleLogout}
                    isLoading={isLoading}
                />
            )}
        </>
    );
};

export default Logout;
