import Modal from "react-modal";
import CustomButton from "../CustomButton";
import { FaUserCircle } from "react-icons/fa";
import { fetchUserDetails, suspendUser } from "../../services/user.service";
import { useState, useEffect } from "react";
const UserProfileModal = ({ userId, isOpen, onRequestClose }) => {
    const [userDetail, setUserDetail] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        try {
            setIsLoading(true);
            const getUserDetails = async () => {
                const res = await fetchUserDetails(userId);
                if (res.status === 200) {
                    setUserDetail(res.data);
                    console.log("user details", res.data);
                }
            };
            getUserDetails();
            setIsLoading(false);
        } catch (err) {
            console.log(err);
            setIsLoading(false);
        }
    }, []);
    return (
        <Modal
            isOpen={isOpen}
            className="w-[800px] h-[500px] max-sm:w-[400px] max-sm:h-[250px]
            flex flex-col items-center justify-center 
            rounded-[20px] bg-neumorphicBg p-[20px]"
            overlayClassName="modal-overlay"
            onRequestClose={onRequestClose}
            ariaHideApp={false}
        >
            <div className="flex flex-col w-full justify-between h-full">
                <div className="flex flex-row">
                    <div className="flex flex-col">
                        <div>
                            {userDetail?.profile?.dp != null ? (
                                <img
                                    src={userDetail?.profile?.dp}
                                    className="size-[100px] rounded-[50%]"
                                />
                            ) : (
                                <FaUserCircle className="size-[100px] text-gray-500" />
                            )}
                        </div>
                        <div className="flex flex-row">
                            <div className="flex flex-col font-dmSans w-[100px]">
                                <p>Name</p>
                                <p>District</p>
                                <p>Club Name</p>
                                <p>Designation</p>
                            </div>
                            <div className="flex flex-col font-dmSans">
                                <p>
                                    {userDetail?.profile?.name
                                        ? userDetail?.profile?.name
                                        : "null"}
                                </p>
                                <p>
                                    {userDetail?.profile?.district
                                        ? userDetail?.profile?.district
                                        : "null"}
                                </p>
                                <p>
                                    {userDetail?.profile?.clubName
                                        ? userDetail?.profile?.clubName
                                        : "null"}
                                </p>
                                <p>
                                    {userDetail?.profile?.designation
                                        ? userDetail?.profile?.designation
                                        : "null"}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col"></div>
                </div>
                <div className="flex flex-row h-[40px] w-full justify-around">
                    {userDetail?.status === "ACTIVE" ? (
                        <CustomButton
                            btnText={"SUSPEND"}
                            active={true}
                            className={"w-[130px]"}
                        />
                    ) : userDetail?.status === "SUSPENDED" ? (
                        <CustomButton
                            btnText={"ACTIVATE"}
                            active={true}
                            className={"w-[130px]"}
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
        </Modal>
    );
};

export default UserProfileModal;
