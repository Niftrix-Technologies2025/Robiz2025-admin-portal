import { IoDocumentText, IoDocumentTextOutline } from "react-icons/io5";
import { useRef, useState } from "react";
import ReusableButton from "../../components/ReusableButton";
import DataTemplateRow from "../../components/DataTemplateRow";
import { IoMdDownload } from "react-icons/io";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { useUploadStore } from "../../store/user.store";
import LoadingMessage from "../../components/LoadingMessage";
import ErrorMessage from "../../components/ErrorMessage";

const sampleData = [
    { label: "EMAIL ID", value: "example@example.com" },
    { label: "FIRST NAME", value: "john" },
    { label: "LAST NAME", value: "doe" },
    { label: "MOBILE NO", value: "1234567890" },
    { label: "DISTRICT ID", value: "9999" },
    { label: "CLUB NAME", value: "example club" },
];
const AddUsers = () => {
    const { isUploading, startUpload, reset, isError, error } =
        useUploadStore();
    const [selectedFile, setSelectedFile] = useState(null);
    const fileInputRef = useRef(null);
    const handleButtonClick = () => {
        fileInputRef.current.click();
    };
    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };
    const handleAddUsers = async () => {
        if (!selectedFile) return;
        try {
            const res = await startUpload(selectedFile);
            if (res.status === 200) {
                setSelectedFile(null);
                if (fileInputRef.current) fileInputRef.current.value = "";
            }
        } catch (err) {
            console.error("Error adding users from CSV:", err);
        }
    };
    const handleReset = () => {
        if (fileInputRef.current) fileInputRef.current.value = "";
        setSelectedFile(null);
        reset();
    };
    return (
        <div
            className="w-full h-full px-[60px] py-[30px] max-lg:px-[10px] max-lg:py-[5px]
            flex flex-col items-center justify-center font-dmSans"
        >
            <div
                className={`px-[10px] py-[3px] flex justify-between items-center 
                w-full gap-[10px] ${isUploading || isError ? "hidden" : ""}`}
            >
                <p
                    className={`text-[24px] max-sm:text-[17px] font-bold whitespace-nowrap `}
                >
                    Expected data format:
                </p>
                <a href="/users.csv" download>
                    <ReusableButton
                        btnText={"Download Sample .csv"}
                        icon={<IoMdDownload />}
                        classname={`!rounded-[5px] h-[30px] !border-0 font-bold max-sm:text-[12px]`}
                    />
                </a>
            </div>

            <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                accept=".csv,text/csv"
                onChange={handleFileChange}
            />
            {isUploading ? (
                <div
                    className="w-full h-[90%] flex flex-col items-center justify-center 
                    bg-white rounded-[5px] border-gray-500 border-[1.5px]"
                >
                    <LoadingMessage
                        title={"Processing File..."}
                        warning={"Please do not refresh the page"}
                    />
                </div>
            ) : isError ? (
                <div
                    className="w-full h-[90%] flex flex-col items-center justify-center 
                    bg-white rounded-[5px] border-gray-500 border-[1.5px]"
                >
                    <ErrorMessage
                        title={"Unable to add users"}
                        errorMsg={
                            error?.response?.data?.error ||
                            error?.message ||
                            "null"
                        }
                        resetMsg={"Please try again"}
                        resetFn={handleReset}
                    />
                </div>
            ) : (
                <>
                    <DataTemplateRow data={sampleData} />
                    <div
                        className={`w-full h-full border-2 border-dashed  ${
                            selectedFile ? "border-black" : "border-gray-400"
                        } rounded-[5px]  
                        flex flex-col items-center justify-center gap-[20px] cursor-pointer bg-white`}
                        onClick={handleButtonClick}
                    >
                        {selectedFile ? (
                            <div className="flex flex-col items-center justify-center gap-[10px]">
                                <div className="relative">
                                    <IoDocumentText className="size-[54px]" />
                                    <IoIosCheckmarkCircle className="text-green-500 size-[24px] absolute top-7/11 right-0.5" />
                                </div>
                                <span className="text-black text-sm truncate max-w-[300px]">
                                    {selectedFile.name}
                                </span>
                                <ReusableButton
                                    btnText={"Change File"}
                                    title={"Select CSV File"}
                                    classname={`w-[150px] h-[40px] !text-[16px] !rounded-[5px] 
                                    !border-0 !bg-red-500 !text-white`}
                                />
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center gap-[10px]">
                                <IoDocumentTextOutline className="size-[52px] text-gray-700" />
                                <p className="font-bold text-gray-700">
                                    Upload .csv file
                                </p>
                                <ReusableButton
                                    btnText={"Select File"}
                                    title={"Select CSV File"}
                                    classname={`w-[150px] h-[40px] !text-[16px] !rounded-[5px] 
                                    !border-0 !bg-gray-400 !text-textColor`}
                                />
                            </div>
                        )}
                    </div>
                </>
            )}
            <div className="h-[20px]" />
            <ReusableButton
                btnText={"Add users from the selected file"}
                classname={"w-[250px] h-[50px] font-bold"}
                btnActive={!selectedFile || isUploading || isError}
                onClick={handleAddUsers}
            />
        </div>
    );
};

export default AddUsers;
