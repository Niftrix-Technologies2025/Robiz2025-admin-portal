import { IoDocumentText } from "react-icons/io5";
import { useRef, useState } from "react";
import ReusableButton from "../../components/ReusableButton";
import DataTemplateRow from "./components/DataTemplateRow";
import LoadingItem from "../../components/LoadingItem";

const sampleData = [
    { label: "EMAIL ID", value: "example@example.com" },
    { label: "FIRST NAME", value: "john" },
    { label: "LAST NAME", value: "doe" },
    { label: "MOBILE NO", value: "1234567890" },
    { label: "DISTRICT ID", value: "9999" },
    { label: "CLUB NAME", value: "example club" },
];
const AddUsers = () => {
    const [isLoading, setIsLoading] = useState(false);
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
            setIsLoading(true);
            const res = await addUsersFromCSV(selectedFile);
            if (res.status === 200) {
                // Show success message or handle response
                setIsLoading(false);
            }
        } catch (err) {
            setIsLoading(false);
            console.error("Error adding users from CSV:", err);
        }
    };
    return (
        <div
            className="w-full h-full px-[60px] py-[30px] max-lg:px-[10px] max-lg:py-[5px]
            flex flex-col items-center justify-center font-dmSans"
        >
            <p
                className={`pl-[10px] flex justify-start w-full text-[24px] font-bold ${
                    isLoading ? "hidden" : ""
                }`}
            >
                Expected data format:
            </p>
            <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                accept=".csv,text/csv"
                onChange={handleFileChange}
            />

            {isLoading ? (
                <div
                    className="w-full h-[90%] flex flex-col items-center justify-center 
                bg-white rounded-[5px] border-gray-500 border-[1.5px]"
                >
                    <div>
                        <p className="italic">Processing File...</p>
                        <LoadingItem size={15} />
                    </div>
                </div>
            ) : (
                <>
                    <DataTemplateRow data={sampleData} />
                    <div
                        className="w-full h-full border-2 border-dashed rounded-[5px]  
                    flex flex-col items-center justify-center gap-[20px] cursor-pointer bg-white"
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
                </>
            )}
            <div className="h-[20px]" />
            <ReusableButton
                btnText={"Add users from the selected file"}
                classname={"w-[250px] h-[50px]"}
                btnActive={!selectedFile || isLoading}
                onClick={handleAddUsers}
            />
        </div>
    );
};

export default AddUsers;
