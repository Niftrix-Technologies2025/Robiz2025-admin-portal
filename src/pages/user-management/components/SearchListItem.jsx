import { useState } from "react";
import ListItemButton from "../../../components/ListItemButton";
import UserProfileModal from "../modals/UserProfileModal";
const SearchListItem = ({ user,onStatusChange }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    // const changeStatusHandler = () => {
    // };
    return (
        <div
            className="flex flex-row w-full items-center 
        justify-between font-dmSans bg-outletBg flex-shrink-0 rounded-[20px] px-[15px] py-[5px]
         text-textColorAlt truncate"
        >
            <p className="w-[40px] truncate">{user.userId}</p>
            <p className="w-[150px] truncate">{user.name}</p>
            <p className="w-[100px] truncate">{user.district}</p>
            <p className="w-[320px] truncate">{user.clubName}</p>
            <p className="w-[200px] truncate">{user.emailId}</p>
            <p className="w-[100px] truncate">{user.status}</p>
            <ListItemButton
                btnText={"View Profile"}
                onClick={() => {
                    setIsModalOpen(true);
                }}
            />
            {isModalOpen && (
                <UserProfileModal
                    userId={user.userId}
                    isOpen={isModalOpen}
                    onRequestClose={() => setIsModalOpen(false)}
                    onStatusChange={onStatusChange}
                />
            )}
        </div>
    );
};

export default SearchListItem;
