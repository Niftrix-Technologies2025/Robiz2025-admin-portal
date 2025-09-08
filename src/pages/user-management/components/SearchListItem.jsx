import { useState } from "react";
import ListItemButton from "../../../components/ListItemButton";
import UserProfileModal from "../modals/UserProfileModal";
import UserActivityHistoryModal from "../modals/UserActivityHistoryModal";
const columnTitleStyle = "font-medium text-[12px] text-gray-600";
const SearchListItem = ({ user, onStatusChange }) => {
    const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
    const [isActivityModalOpen, setIsActivityModalOpen] = useState(false);
    // const changeStatusHandler = () => {
    // };
    return (
        <div
            className="flex flex-row w-full items-center 
        justify-between font-dmSans bg-outletBg flex-shrink-0 rounded-[10px] px-[15px] py-[5px]
         text-textColorAlt truncate gap-[10px] max-md:gap-[5px]"
        >
            <div className="flex flex-col truncate">
                <p className={`${columnTitleStyle}`}>ID</p>
                <p className="w-[40px] overflow-x-auto scrollbar-hide">
                    {user.user_id ?? "-"}
                </p>
            </div>
            <div className="flex flex-col truncate">
                <p className={`${columnTitleStyle}`}>Name</p>
                <p className="w-[150px] overflow-x-auto scrollbar-hide">
                    {user.firstname ?? "-"} {user.lastname}
                </p>
            </div>
            <div className="flex flex-col truncate">
                <p className={`${columnTitleStyle}`}>District ID</p>
                <p className="w-[100px] overflow-x-auto scrollbar-hide">
                    {user.district_id ?? "-"}
                </p>
            </div>
            <div className="flex flex-col truncate">
                <p className={`${columnTitleStyle}`}>Club Name</p>
                <p className="w-[320px] overflow-x-auto scrollbar-hide">
                    {user.club_name ?? "-"}
                </p>
            </div>
            <div className="flex flex-col truncate">
                <p className={`${columnTitleStyle}`}>Email</p>
                <p className="w-[200px] overflow-x-auto scrollbar-hide">
                    {user.email ?? "-"}
                </p>
            </div>
            <div className="flex flex-col truncate">
                <p className={`${columnTitleStyle}`}>Status</p>
                <p className="w-[100px] truncate overflow-x-auto scrollbar-hide">
                    {user.status ?? "-"}
                </p>
            </div>
            <ListItemButton
                btnText={"Activity History"}
                onClick={() => {
                    setIsActivityModalOpen(true);
                }}
                classname={""}
            />
            <ListItemButton
                btnText={"View Profile"}
                onClick={() => {
                    setIsProfileModalOpen(true);
                }}
            />
            {isActivityModalOpen && (
                <UserActivityHistoryModal
                    userId={user.user_id}
                    isOpen={isActivityModalOpen}
                    onRequestClose={() => setIsActivityModalOpen(false)}
                />
            )}
            {isProfileModalOpen && (
                <UserProfileModal
                    userId={user.user_id}
                    isOpen={isProfileModalOpen}
                    onRequestClose={() => setIsProfileModalOpen(false)}
                    onStatusChange={onStatusChange}
                />
            )}
        </div>
    );
};

export default SearchListItem;
