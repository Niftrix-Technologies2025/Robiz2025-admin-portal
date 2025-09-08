import Modal from "react-modal";
import { useLoading } from "../../../hooks/useLoading";
import LoadingItem from "../../../components/LoadingItem";
import { useEffect } from "react";
import { fetchUserActivityHistory } from "../../../services/user.service";
import CustomCloseButton from "../../../components/CustomCloseButton";
import UserActivityHistorySection from "../components/UserActivityHistorySection";
const UserActivityHistoryModal = ({ userId, isOpen, onRequestClose }) => {
    const { isLoading, setIsLoading } = useLoading();
    useEffect(() => {
        const fetchActivityHistory = async () => {
            try {
                setIsLoading(true);
                const res = await fetchUserActivityHistory(userId);
                if (res.status === 200) {
                    // Handle the fetched activity history data
                    console.log("User Activity History:", res.data);
                    setIsLoading(false);
                }
            } catch (err) {
                console.log(err);
                setIsLoading(false);
            }
        };
        fetchActivityHistory();
    }, [userId]);
    return (
        <Modal
            isOpen={isOpen}
            className={`w-[820px] h-[600px] flex flex-col items-center justify-center 
                rounded-[20px] bg-neumorphicBg p-[10px]`}
            overlayClassName="modal-overlay"
            onRequestClose={onRequestClose}
            ariaHideApp={false}
        >
            <div className="w-full h-full relative">
                <CustomCloseButton ClickFn={onRequestClose} />
                {isLoading ? (
                    <LoadingItem size={10} />
                ) : (
                    <div className="flex flex-col w-full h-[90%] mt-[35px] px-[10px] gap-[10px] overflow-y-auto">
                        <UserActivityHistorySection />
                        <UserActivityHistorySection />
                        <UserActivityHistorySection />
                    </div>
                )}
            </div>
        </Modal>
    );
};

export default UserActivityHistoryModal;
