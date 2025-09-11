import Modal from "react-modal";
import { useLoading } from "../../../hooks/useLoading";
import LoadingItem from "../../../components/LoadingItem";
import { useEffect, useState } from "react";
import { fetchUserActivityHistory } from "../../../services/user.service";
import CustomCloseButton from "../../../components/CustomCloseButton";
import Select from "react-select";
import UserActivityHistorySection from "../components/UserActivityHistorySection";
import { IoClose } from "react-icons/io5";
const dropDownValues = [
    { value: "premium", label: "Premium Services" },
    { value: "referral", label: "Referrals" },
];
const UserActivityHistoryModal = ({ userId, isOpen, onRequestClose }) => {
    const { isLoading, setIsLoading } = useLoading();
    const [selectedAttribute, setSelectedAttribute] = useState(
        dropDownValues[0]
    );
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
            className={`w-[1318.09px] h-[560.6px] flex flex-col items-center justify-center 
                rounded-[20px] bg-neumorphicBg p-[10px]`}
            overlayClassName="modal-overlay"
            onRequestClose={onRequestClose}
            ariaHideApp={false}
        >
            <div className="w-full h-full flex flex-col">
                <div className="flex flex-row justify-between px-[5px]">
                    <div className="flex flex-row gap-[16.44px] items-center">
                        <p className="font-dmSans text-[25px] font-semibold">
                            Activity History
                        </p>
                        <Select
                            value={selectedAttribute}
                            onChange={setSelectedAttribute}
                            options={dropDownValues}
                            className={`w-[218px] max-sm:w-[110px] my-[2px] font-dmSans`}
                            classNamePrefix="react-select"
                            isSearchable={false}
                        />
                    </div>
                    <IoClose className="size-[24px] cursor-pointer" />
                </div>

                {isLoading ? (
                    <LoadingItem size={10} />
                ) : (
                    <div className="flex flex-col w-full h-[90%] mt-[15px] px-[10px] gap-[10px] overflow-y-auto">
                        <UserActivityHistorySection
                            sectionTitle={"Referrals Sent/Received"}
                        />
                        <UserActivityHistorySection
                            sectionTitle={"Premium Services"}
                        />
                    </div>
                )}
            </div>
        </Modal>
    );
};

export default UserActivityHistoryModal;
