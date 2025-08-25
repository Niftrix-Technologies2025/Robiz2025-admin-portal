import Logout from "./Logout";
// import { RxHamburgerMenu } from "react-icons/rx";
import { get } from "idb-keyval";
import { useEffect, useState } from "react";

// export default PageHeader;

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
        <div className="fixed z-10 w-full h-[48px] flex flex-row items-center justify-between pl-[80px] px-2 py-1 bg-headerBg text-textColor font-dmSans">
            <div className="flex flex-row items-center">
                {/* <RxHamburgerMenu className="sm:hidden" /> */}
                <p>Robiz Admin</p>
            </div>

            <div className="flex flex-row items-center justify-center gap-[10px]">
                {/* <p>Logout</p> */}
                {/* <p>{adminDetails.firstName}</p> */}
                <Logout />
            </div>
        </div>
    );
};

export default PageHeader;
