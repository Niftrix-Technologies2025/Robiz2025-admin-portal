import Modal from "react-modal";
import CustomButton from "../../../components/CustomButton";
import { FaUserCircle } from "react-icons/fa";
import {
    fetchUserDetails,
    suspendUser,
    activateUser,
} from "../../../services/user.service";
import { useState, useEffect } from "react";
import UserProfileDetail from "../components/UserProfileDetail";
import LoadingItem from "../../../components/LoadingItem";

const UserProfileModal = ({
    userId,
    isOpen,
    onRequestClose,
    onStatusChange,
}) => {
    const [userDetail, setUserDetail] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        try {
            setIsLoading(true);
            const getUserDetails = async () => {
                const res = await fetchUserDetails(userId);
                if (res.status === 200) {
                    setUserDetail(res.data);
                    // console.log("user details", res.data);
                }
                setIsLoading(false);
            };
            getUserDetails();
        } catch (err) {
            console.log(err);
            setIsLoading(false);
        }
    }, []);
    const suspendUserHandler = async () => {
        try {
            setIsLoading(true);
            const res = await suspendUser(userId);
            if (res.status === 200) {
                setUserDetail((prev) => ({ ...prev, status: "SUSPENDED" }));
                if (onStatusChange) onStatusChange(userId, "SUSPENDED");
                setIsLoading(false);
            }
        } catch (err) {
            setIsLoading(false);
            console.log(err);
        }
    };
    const activateUserHandler = async () => {
        try {
            setIsLoading(true);
            const res = await activateUser(userId);
            if (res.status === 200) {
            }
        } catch (err) {
            setIsLoading(false);
            console.log(err);
        }
    };
    return (
        <Modal
            isOpen={isOpen}
            className={`w-[820px] h-[500px] flex flex-col items-center justify-center 
            rounded-[20px] bg-neumorphicBg p-[20px]`}
            overlayClassName="modal-overlay"
            onRequestClose={onRequestClose}
            ariaHideApp={false}
        >
            {isLoading ? (
                <LoadingItem size={10} />
            ) : (
                <div className="flex flex-col justify-between w-full h-full">
                    <div className="flex flex-row justify-between w-full">
                        <div className="flex flex-col justify-between">
                            <div className="flex items-center justify-center mb-[10px]">
                                {userDetail?.profile?.dp != null ? (
                                    <img
                                        src={userDetail?.profile?.dp}
                                        className="size-[150px] rounded-[50%]"
                                    />
                                ) : (
                                    <FaUserCircle className="size-[150px] text-gray-500" />
                                )}
                            </div>
                            {userDetail && (
                                <UserProfileDetail
                                    heading={"PERSONAL DETAIL"}
                                    mappings={[
                                        {
                                            label: "Name",
                                            value: userDetail.profile?.name,
                                        },
                                        {
                                            label: "District",
                                            value: userDetail.profile?.district,
                                        },
                                        {
                                            label: "Club Name",
                                            value: userDetail.profile?.clubName,
                                        },
                                        {
                                            label: "Designation",
                                            value: userDetail.profile
                                                ?.designation,
                                        },
                                        {
                                            label: "Email Id",
                                            value: userDetail.profile?.emailId,
                                        },
                                        {
                                            label: "Phone No",
                                            value: userDetail.profile?.phoneNo,
                                        },
                                    ]}
                                />
                            )}
                        </div>
                        <div className="flex flex-col gap-[10px]">
                            {userDetail && (
                                <UserProfileDetail
                                    labelClassname={"!w-[150px]"}
                                    heading={"BUSINESS DETAIL"}
                                    mappings={[
                                        {
                                            label: "Business Name",
                                            value: userDetail.business
                                                ?.businessName,
                                        },
                                        {
                                            label: "Description",
                                            value: userDetail.business
                                                ?.description,
                                        },
                                        {
                                            label: "Industry",
                                            value: userDetail.business
                                                ?.industry,
                                        },
                                        {
                                            label: "Category",
                                            value: userDetail.business
                                                ?.category,
                                        },
                                    ]}
                                />
                            )}
                            {userDetail && (
                                <UserProfileDetail
                                    labelClassname={"!w-[180px]"}
                                    valueClassname={"!w-[180px]"}
                                    heading={"ROBIZ ACTIVITY"}
                                    mappings={[
                                        {
                                            label: "Referrals Given",
                                            value: userDetail.activity
                                                ?.referralsGiven,
                                        },
                                        {
                                            label: "Referrals Received",
                                            value: userDetail.activity
                                                ?.referralsReceived,
                                        },
                                        {
                                            label: "Business Converted",
                                            value: userDetail.activity
                                                ?.businessConverted,
                                        },
                                        {
                                            label: "Revenue Generated",
                                            value: userDetail.activity
                                                ?.revenueGenerated,
                                        },
                                    ]}
                                />
                            )}
                        </div>
                    </div>
                    <div className="flex flex-row h-[40px] w-full justify-around">
                        {userDetail?.status === "ACTIVE" ? (
                            <CustomButton
                                btnText={"SUSPEND"}
                                active={true}
                                className={"w-[130px]"}
                                onClick={suspendUserHandler}
                                isLoading={isLoading}
                            />
                        ) : userDetail?.status === "SUSPENDED" ? (
                            <CustomButton
                                btnText={"ACTIVATE"}
                                active={true}
                                className={"w-[130px]"}
                                onClick={activateUserHandler}
                                isLoading={isLoading}
                            />
                        ) : null}

                        <CustomButton
                            btnText={"CLOSE"}
                            active={true}
                            className={"w-[130px]"}
                            onClick={onRequestClose}
                        />
                    </div>
                </div>
            )}
        </Modal>
    );
};

export default UserProfileModal;
