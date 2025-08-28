// import { BsFiletypeCsv } from "react-icons/bs";
// import { IoIosDocument } from "react-icons/io";
// import { HiOutlineDocumentText } from "react-icons/hi2";
import { IoDocumentText } from "react-icons/io5";
// import { BsFiletypeCsv } from "react-icons/bs";
import { useRef, useState } from "react";
import ReusableButton from "../../components/ReusableButton";

const AddUsers = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const fileInputRef = useRef(null);
    const handleButtonClick = () => {
        fileInputRef.current.click();
    };
    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };
    return (
        <div
            className="w-full h-full px-[60px] py-[30px] max-lg:px-[10px] max-lg:py-[5px]
            flex flex-col items-center justify-center gap-[20px] font-dmSans"
        >
            <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                accept=".csv,text/csv"
                onChange={handleFileChange}
            />
            {/* <p>Expected data</p> */}
            <div
                className="w-full h-full border-2 border-dashed rounded-[5px]  
                flex flex-col items-center justify-center gap-[20px] cursor-pointer"
                onClick={handleButtonClick}
            >
                {selectedFile ? (
                    <div className="flex flex-col items-center justify-center gap-[10px]">
                        <IoDocumentText className="size-[42px]" />
                        <span className="text-black text-sm truncate max-w-[300px]">
                            {selectedFile.name}
                        </span>
                        <ReusableButton
                            btnText={"Select Different File"}
                            title={"Select CSV File"}
                            classname={`w-[180px] h-[40px] !text-[16px] !rounded-[5px] 
                        !border-0 !bg-red-500 !text-white`}
                        />
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center gap-[10px]">
                        <p className="font-bold text-gray-700">
                            Upload .csv file
                        </p>
                        <ReusableButton
                            btnText={"Select File"}
                            title={"Select CSV File"}
                            classname={`w-[150px] h-[40px] !text-[16px] !rounded-[5px] 
                        !border-0 !bg-red-500 !text-white`}
                        />
                    </div>
                )}
            </div>
            <ReusableButton
                btnText={"Add users from the selected file"}
                classname={"w-[250px] h-[50px]"}
                btnActive={!selectedFile}
            />
        </div>
    );
};

export default AddUsers;
