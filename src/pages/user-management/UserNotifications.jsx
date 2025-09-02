import { useRef } from "react";
import ReusableButton from "../../components/ReusableButton";
import UserNotificationCard from "./components/UserNotificationCard";
import { useNotificationStore } from "../../store/user.notification.store";
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
        setIsLoading,
        setMessage,
        setRecipientType,
        setAttachments,
        reset,
        sendNotification,
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
    return (
        <div className="w-full h-full flex flex-col gap-[10px] overflow-y-auto pr-[10px]">
            <UserNotificationCard sectionTitle={"Compose Email"}>
                <textarea
                    placeholder="Type your message here..."
                    className="border border-gray-200 rounded p-2 
                    max-h-[150px] min-h-[150px] w-full bg-white font-dmSans text-[15px] disabled:opacity-50"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    disabled={isLoading}
                />
            </UserNotificationCard>
            <UserNotificationCard sectionTitle={"Select Recipient type"}>
                {recipientTypes.map((type) => (
                    <label
                        key={type.value}
                        className="flex items-center gap-[10px] font-dmSans"
                    >
                        <input
                            className="radio size-[16px] disabled:opacity-50"
                            type="radio"
                            name="recipientType"
                            value={type.value}
                            checked={recipientType === type.value}
                            onChange={() => setRecipientType(type.value)}
                            disabled={isLoading}
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
                        btnActive={isLoading}
                    />
                    <ReusableButton
                        btnText={"Remove Attachments"}
                        btnActive={attachments.length === 0 || isLoading}
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
                                className="bg-gray-300 border-2 border-white 
                                text-textColorAlt rounded-[5px] p-[3px] font-medium"
                                key={idx}
                            >
                                {file.name}
                            </li>
                        ))}
                    </ul>
                )}
            </UserNotificationCard>
            <div className="h-[5px]" />
            <ReusableButton
                btnText={"Send message"}
                classname={`ml-[5px] w-[200px] h-[40px] border-none !rounded-[5px] !bg-red-500 disabled:!bg-gray-400 text-white 
                    ${
                        !message
                            ? `!text-gray-200 font-light cursor-default`
                            : ""
                    }`}
                btnActive={!message}
                onClick={sendNotificationHandler}
                isLoading={isLoading}
            />
            <div className="h-[10px]" />
        </div>
    );
};

export default UserNotifications;
