import { useState } from "react";
import ListItemButton from "../../../components/ListItemButton";
import UserProfileModal from "../../../components/modals/UserProfileModal";
const SearchListItem = ({ user }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div
            className="flex flex-row w-full items-center 
        font-dmSans bg-outletBg flex-shrink-0 rounded-[20px] px-[15px] py-[5px]"
        >
            <p className="w-[40px]">{user.user_id}</p>
            <p className="w-[120px]">{user.firstname}</p>
            <p className="w-[120px]">{user.lastname}</p>
            <ListItemButton
                btnText={"View Profile"}
                onClick={() => {
                    setIsModalOpen(true);
                }}
            />
            <UserProfileModal
                userId={user.user_id}
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
            />
        </div>
    );
};

export default SearchListItem;
