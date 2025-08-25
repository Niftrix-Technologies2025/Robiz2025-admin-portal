// import React from 'react'
import { FaFileUpload } from "react-icons/fa";
import ReusableButton from "../../components/ReusableButton";

const AddUsers = () => {
    return (
        <div className="w-full h-full flex flex-col ">
            <ReusableButton
                btnText={"Add Users"}
                icon={<FaFileUpload />}
                title={"Add users from CSV File"}
            />
        </div>
    );
};

export default AddUsers;
