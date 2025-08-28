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
            <div
                className="flex flex-row items-center justify-center font-dmSans
                cursor-pointer bg-gradient-to-b from-[#FCBB12] to-[#FAFF00] rounded-[5px] 
                text-textColorAlt px-[4px] py-[1.5px] hover:shadow-xl"
                onClick={() => {
                    setIsOpen(true);
                }}
            >
                <p className="text-[16px]">Logout</p>
                <TbLogout2 className="size-[18px]" title="Logout" />
            </div>

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
