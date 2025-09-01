import { useEffect, useState } from "react";
import { fetchUnverifiedUsers } from "../../services/user.service";
import UserVerificationListItem from "./components/UserVerificationListItem";
import LoadingItem from "../../components/LoadingItem";
import PaginatedNavbar from "./components/PaginatedNavbar";

const PAGE_SIZE = 50; //100 results per page

const UserVerification = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [pendingUsers, setPendingUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    useEffect(() => {
        setIsLoading(true);
        const fetchUserData = async () => {
            try {
                const res = await fetchUnverifiedUsers({
                    page,
                    limit: PAGE_SIZE,
                });
                const usersList = res.data.users || [];
                setPendingUsers(usersList);
                setTotal(res.data.total || 0);
            } catch (err) {
                // Optionally handle/log error here
            } finally {
                setIsLoading(false);
            }
        };
        fetchUserData();
    }, [page]);

    const totalPages = Math.ceil(total / PAGE_SIZE);
    return (
        <div className="flex flex-col w-full h-full">
            {isLoading ? (
                <LoadingItem size={10} classname="" />
            ) : pendingUsers.length > 0 ? (
                // <div className="flex-1 overflow-y-auto">
                <div className="flex flex-col">
                    <div className="flex flex-row gap-[10px] max-sm:gap-[5px] items-center">
                        <p
                            className="font-dmSans whitespace-nowrap 
                            max-sm:text-[12px] font-semibold bg-white py-[5px] px-[7px] max-sm:py-[7px] max-sm:px-[8px] rounded-[10px] border-gray-200 border-[1.5px]"
                        >
                            {total} users pending verification!
                        </p>
                        <PaginatedNavbar
                            pageNo={page}
                            totalPages={totalPages}
                            backwardAction={() => setPage(page - 1)}
                            skipBackwardAction={() => setPage(1)}
                            forwardAction={() => setPage(page + 1)}
                            skipForwardAction={() => setPage(totalPages)}
                        />
                    </div>
                    <div className="flex-1 overflow-y-auto mb-[20px]">
                        {pendingUsers.map((user, index) => (
                            <UserVerificationListItem
                                index={index}
                                key={user.user_id}
                                user_id={user.user_id}
                                firstname={user.firstname}
                                lastname={user.lastname}
                                email={user.email}
                                page={page}
                                pageSize={PAGE_SIZE}
                            />
                        ))}
                    </div>
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
