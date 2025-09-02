import { useState } from "react";
import ListItemButton from "../../../components/ListItemButton";
import UserProfileModal from "../modals/UserProfileModal";
const SearchListItem = ({ user, onStatusChange }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    // const changeStatusHandler = () => {
    // };
    return (
        <div
            className="flex flex-row w-full items-center 
        justify-between font-dmSans bg-outletBg flex-shrink-0 rounded-[10px] px-[15px] py-[5px]
         text-textColorAlt truncate"
        >
            <p className="w-[40px] truncate">{user.user_id}</p>
            <p className="w-[150px] truncate">
                {user.firstname} {user.lastname}
            </p>
            <p className="w-[100px] truncate">{user.district_id}</p>
            <p className="w-[320px] truncate">{user.club_name}</p>
            <p className="w-[200px] truncate">{user.email}</p>
            <p className="w-[100px] truncate">{user.status}</p>
            <ListItemButton
                btnText={"View Profile"}
                onClick={() => {
                    setIsModalOpen(true);
                }}
            />
            {isModalOpen && (
                <UserProfileModal
                    userId={user.user_id}
                    isOpen={isModalOpen}
                    onRequestClose={() => setIsModalOpen(false)}
                    onStatusChange={onStatusChange}
                />
            )}
        </div>
    );
};

export default SearchListItem;
