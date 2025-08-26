import { setUserAsVerified } from "../../../services/user.service";
import { useState } from "react";
import CustomModal from "../../../components/modals/CustomModal";
import ListItemButton from "../../../components/ListItemButton";
const UserVerificationListItem = ({
    index,
    user_id,
    firstname,
    lastname,
    email,
    btnText = "Verify User",
}) => {
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
            <p className="w-[30px] truncate">{index + 1 ?? "null"}</p>
            <p className="w-[40px] truncate">{user_id ?? "null"}</p>
            <p className="w-[120px] truncate">{firstname ?? "null"}</p>
            <p className="w-[120px] truncate">{lastname ?? "null"}</p>
            <p className="w-[250px] truncate">{email ?? "null"}</p>
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
