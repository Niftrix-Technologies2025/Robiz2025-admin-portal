import Modal from "react-modal";
import CustomButton from "../CustomButton";
import { FaUserCircle } from "react-icons/fa";
import { fetchUserDetails, suspendUser } from "../../services/user.service";
import { useState,useEffect } from "react";
const UserProfileModal = ({ userId, isOpen, onRequestClose }) => {
    const [userDetail,setUserDetail] = useState(null);
    useEffect(() => {


    }, []);
    return (
        <Modal
            isOpen={isOpen}
            className="w-[800px] h-[500px] max-sm:w-[400px] max-sm:h-[250px]
            flex flex-col items-center justify-center 
            rounded-[20px] bg-neumorphicBg"
            overlayClassName="modal-overlay"
            onRequestClose={onRequestClose}
            ariaHideApp={false}
        >
            <div className="flex flex-col w-full justify-between">
                <div className="flex flex-row">
                    <div className="flex flex-col">
                        <div>
                            <FaUserCircle className="w-[100px] h-[100px] text-gray-500" />

                        </div>
                        <div className="flex flex-col">

                        </div>

                    </div>
                    <div className="flex flex-col">

                    </div>

                </div>
                <div className="flex flex-row h-[40px] w-full justify-between">
                    <CustomButton
                        btnText={"SUSPEND"}
                        active={true}
                        className={"w-[130px]"}
                    />
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
