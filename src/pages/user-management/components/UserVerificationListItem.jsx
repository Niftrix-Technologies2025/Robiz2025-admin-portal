import { setUserAsVerified } from "../../../services/user.service";
import { useState } from "react";
import CustomModal from "../../../components/modals/CustomModal";
import ListItemButton from "../../../components/ListItemButton";
const columnTitleStyle = "font-medium text-[12px] text-gray-600";
const UserVerificationListItem = ({
    index,
    user_id,
    firstname,
    lastname,
    email,
    btnText = "Verify User",
    page = 1,
    pageSize = 50,
}) => {
    const serialNumber = (page - 1) * pageSize + index + 1;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const setVerified = async () => {
        try {
            setIsLoading(true);
            const res = await setUserAsVerified(user_id);
            if (res.status === 200) {
                setIsModalOpen(false);
                window.location.reload();
            }
        } catch (err) {
            console.error("Error setting user as verified:", err);
            setIsLoading(false);
            setIsModalOpen(false);
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <div
            className="flex flex-row items-center border-[0.5px] border-gray-200 font-dmSans truncate my-[5px] 
        rounded-[10px] bg-white px-[8px] gap-[5px] py-[5px] w-full justify-between 
        max-w-[800px] flex-shrink-0"
        >
            <div className="flex flex-col truncate">
                <p className={`${columnTitleStyle}`}>No</p>
                <p className="w-[30px]">{serialNumber ?? "-"}</p>
            </div>
            <div className="flex flex-col truncate">
                <p className={`${columnTitleStyle}`}>ID</p>
                <p className="w-[40px]">{user_id ?? "-"}</p>
            </div>
            <div className="flex flex-col truncate">
                <p className={`${columnTitleStyle}`}>Firstname</p>
                <p className="w-[120px]">{firstname ?? "-"}</p>
            </div>
            <div className="flex flex-col truncate">
                <p className={`${columnTitleStyle}`}>Lastname</p>
                <p className="w-[120px] ">{lastname ?? "-"}</p>
            </div>
            <div className="flex flex-col truncate">
                <p className={`${columnTitleStyle}`}>Email</p>
                <p className="w-[250px] truncate">{email ?? "-"}</p>
            </div>

            <ListItemButton
                btnText={btnText}
                onClick={() => {
                    setIsModalOpen(true);
                }}
                isLoading={isLoading}
            />
            {isModalOpen && (
                <CustomModal
                    primaryText={"USER VERIFICATION"}
                    secondaryText={"Are you sure you want to verify this user?"}
                    positiveText={"Yes"}
                    negativeText={"No"}
                    isOpen={isModalOpen}
                    onRequestClose={() => setIsModalOpen(false)}
                    onClick={setVerified}
                    isLoading={isLoading}
                />
            )}
        </div>
    );
};

export default UserVerificationListItem;
