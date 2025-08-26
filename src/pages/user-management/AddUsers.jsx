// import React from 'react'
import { FaFileUpload } from "react-icons/fa";
import { useRef } from "react";
import ReusableButton from "../../components/ReusableButton";

const AddUsers = () => {
    const fileInputRef = useRef(null);
    const handleButtonClick = () => {
        fileInputRef.current.click();
    };
    return (
        <div className="w-full h-full flex flex-col ">
            <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                accept=".csv,text/csv"
            />
            <ReusableButton
                btnText={"Select CSV File"}
                icon={<FaFileUpload />}
                title={"Select CSV File"}
                onClick={handleButtonClick}
                classname={"w-[120px]"}
            />
        </div>
    );
};

export default AddUsers;
