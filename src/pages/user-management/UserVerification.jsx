import { useEffect, useState } from "react";
import { fetchUnverifiedUsers } from "../../services/user.service";
import UserVerificationListItem from "./components/UserVerificationListItem";
import LoadingItem from "../../components/LoadingItem";
import PaginationNavbar from "../../components/PaginationNavbar";
import { usePagination } from "../../hooks/usePagination";
import { useLoading } from "../../hooks/useLoading";

const PAGE_SIZE = 100; //100 results per page

const UserVerification = () => {
    const { page, setPage, total, setTotal, totalPages } =
        usePagination(PAGE_SIZE);
    const { isLoading, setIsLoading } = useLoading();
    const [pendingUsers, setPendingUsers] = useState([]);
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
                console.error("Failed to fetch unverified users : ", err);
            } finally {
                setIsLoading(false);
            }
        };
        fetchUserData();
    }, [page, PAGE_SIZE]);

    return (
        <div className="flex flex-col w-full h-full gap-[5px] max-w-[1024px]">
            <div className="flex flex-col w-full h-full gap-[5px]">
                <div className="flex flex-row gap-[10px] max-sm:gap-[5px] items-center">
                    <PaginationNavbar
                        pageNo={page}
                        totalPages={totalPages}
                        backwardAction={() => setPage(page - 1)}
                        skipBackwardAction={() => setPage(1)}
                        forwardAction={() => setPage(page + 1)}
                        skipForwardAction={() => setPage(totalPages)}
                    />
                </div>
                {isLoading ? (
                    <LoadingItem size={10} classname="" />
                ) : pendingUsers.length > 0 ? (
                    <div className="flex flex-col overflow-y-auto w-full h-full pr-[3px]">
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
                ) : (
                    <div
                        className="w-full h-full font-dmSans flex 
                        justify-start items-start pt-[20px]"
                    >
                        No Pending Users!
                    </div>
                )}
            </div>
        </div>
    );
};

export default UserVerification;
