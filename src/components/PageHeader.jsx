import Logout from "./Logout";
import { get } from "idb-keyval";
import { useEffect, useState } from "react";

const PageHeader = () => {
    const [adminDetails, setAdminDetails] = useState(null);
    useEffect(() => {
        try {
            const fetchAdminDetails = async () => {
                const adminDetails = await get("robiz_admin_details");
                setAdminDetails(adminDetails);
            };
            fetchAdminDetails();
        } catch (err) {
            console.error("Error fetching user details:", err);
        }
    }, []);
    return (
        <div
            className="fixed z-10 w-full h-[48px] flex flex-row items-center justify-between pl-[80px] pr-[10px] px-2 py-1 
        bg-headerBg text-textColor font-dmSans"
        >
            <div className="flex flex-row items-center">
                <p>Robiz Admin</p>
            </div>

            <div className="flex flex-row items-center justify-center gap-[10px]">
                <p
                    className=" font-bold bg-gradient-to-r from-[#FBBD10] to-[#FAFC01] 
                    bg-clip-text text-transparent"
                >
                    {adminDetails?.firstName ?? "null"}
                </p>
                <Logout />
            </div>
        </div>
    );
};

export default PageHeader;
