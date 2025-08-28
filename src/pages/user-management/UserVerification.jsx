import { useEffect, useState } from "react";
import { fetchUnverifiedUsers } from "../../services/user.service";
import UserVerificationListItem from "./components/UserVerificationListItem";
import LoadingItem from "../../components/LoadingItem";

const UserVerification = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [pendingUsers, setPendingUsers] = useState([]);
    useEffect(() => {
        try {
            setIsLoading(true);
            const fetchUserData = async () => {
                const res = await fetchUnverifiedUsers();
                const usersList = res.data || res;
                setPendingUsers(usersList);
                setIsLoading(false);
            };
            fetchUserData();
        } catch (err) {
            setIsLoading(false);
        }
    }, []);
    return (
        <div className="flex flex-col w-full h-full">
            {isLoading ? (
                <LoadingItem size={10} classname="" />
            ) : pendingUsers.length > 0 ? (
                // <div className="flex-1 overflow-y-auto">
                <div className="flex-1 overflow-y-auto mb-[20px]">
                    {pendingUsers.map((user, index) => (
                        <UserVerificationListItem
                            index={index}
                            key={user.user_id}
                            user_id={user.user_id}
                            firstname={user.firstname}
                            lastname={user.lastname}
                            email={user.email}
                            // status={user.status}
                        />
                    ))}
                </div>
            ) : (
                <div
                    className="w-full h-full font-dmSans flex 
                    justify-start items-start pt-[20px]"
                >
                    No Pending Users!
                </div>
            )}
        </div>
    );
};

export default UserVerification;
