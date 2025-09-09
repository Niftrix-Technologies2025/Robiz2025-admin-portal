import { useRef } from "react";
import ReusableButton from "../../components/ReusableButton";
import UserNotificationCard from "./components/UserNotificationCard";
import { useNotificationStore } from "../../store/user.store";
import LoadingMessage from "../../components/LoadingMessage";
import ErrorMessage from "../../components/ErrorMessage";
const recipientTypes = [
    { label: "All Users", value: "all" },
    { label: "Verified Users", value: "verified" },
    { label: "Unverified Users", value: "unverified" },
    { label: "Suspended Users", value: "suspended" },
];
const UserNotifications = () => {
    const {
        isLoading,
        message,
        recipientType,
        attachments,
        setMessage,
        setRecipientType,
        setAttachments,
        reset,
        sendNotification,
        error,
        isError,
    } = useNotificationStore();
    const fileInputRef = useRef(null);
    const handleFileSelect = () => {
        fileInputRef.current.click();
    };
    const handleFileChange = (e) => {
        setAttachments(Array.from(e.target.files));
        e.target.value = "";
    };
    const handleRemoveAttachments = () => {
        setAttachments([]);
    };
    const sendNotificationHandler = async () => {
        try {
            await sendNotification();
        } catch (err) {
            console.error("Error sending notification:", err);
        }
    };
    const handleReset = () => {
        fileInputRef.current.value = "";
        reset();
    };
    return (
        <div className="w-full h-full flex flex-col gap-[10px] overflow-y-auto pr-[10px] max-w-[800px]">
            <UserNotificationCard sectionTitle={"Compose Email"}>
                <textarea
                    placeholder="Type your message here..."
                    className="border border-gray-200 rounded p-2 
                    max-h-[150px] min-h-[150px] w-full bg-white font-dmSans text-[15px] disabled:opacity-50"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    disabled={isLoading || isError}
                />
            </UserNotificationCard>
            <UserNotificationCard sectionTitle={"Select Recipient type"}>
                {recipientTypes.map((type) => (
                    <label
                        key={type.value}
                        className="flex items-center gap-[10px] font-dmSans"
                    >
                        <input
                            className="size-[16px] disabled:opacity-50"
                            type="radio"
                            name="recipientType"
                            value={type.value}
                            checked={recipientType === type.value}
                            onChange={() => setRecipientType(type.value)}
                            disabled={isLoading || isError}
                        />
                        <span>{type.label}</span>
                    </label>
                ))}
            </UserNotificationCard>
            <UserNotificationCard sectionTitle={"Add Attachments"}>
                <input
                    ref={fileInputRef}
                    style={{ display: "none" }}
                    type="file"
                    multiple
                    onChange={handleFileChange}
                />
                <div className="flex flex-row gap-[10px]">
                    <ReusableButton
                        btnText={"Select Files"}
                        classname={`w-[200px] !border-none !rounded-[5px] ${
                            isLoading ? "opacity-50" : ""
                        }`}
                        onClick={handleFileSelect}
                        btnActive={isLoading || isError}
                    />
                    <ReusableButton
                        btnText={"Remove Attachments"}
                        btnActive={
                            attachments.length === 0 || isLoading || isError
                        }
                        classname={`w-[200px] !border-none !rounded-[5px] ${
                            isLoading ? "opacity-50" : ""
                        }`}
                        onClick={handleRemoveAttachments}
                    />
                </div>

                {attachments.length > 0 && (
                    <ul className="flex flex-row flex-wrap gap-[5px] mt-2 text-sm text-gray-700">
                        {attachments.map((file, idx) => (
                            <li
                                className="bg-gray-300 text-textColorAlt
                                rounded-[5px] py-[3px] px-[4px] font-medium"
                                key={idx}
                            >
                                {file.name}
                            </li>
                        ))}
                    </ul>
                )}
            </UserNotificationCard>
            <div className="h-[5px]" />
            {isLoading ? (
                <LoadingMessage
                    title={"Sending email..."}
                    warning={"Please do not refresh the page"}
                    className={"!items-start"}
                    size={8}
                />
            ) : isError ? (
                <ErrorMessage
                    title={"Unable to send mail"}
                    errorMsg={
                        error?.response?.data?.error || error?.message || "null"
                    }
                    resetMsg={"Please try again"}
                    resetFn={handleReset}
                    className={"pl-[10px] !items-start"}
                />
            ) : (
                <ReusableButton
                    btnText={"Send message"}
                    classname={`ml-[5px] w-[200px] h-[40px] border-none !rounded-[5px] !bg-red-500 
                    disabled:!bg-red-400 disabled:!text-gray-200 disabled:font-light text-white`}
                    btnActive={!message}
                    onClick={sendNotificationHandler}
                />
            )}
            <div className="h-[10px]" />
        </div>
    );
};

export default UserNotifications;
