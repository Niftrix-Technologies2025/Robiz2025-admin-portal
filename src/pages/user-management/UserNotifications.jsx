import { useState, useRef } from "react";
import ReusableButton from "../../components/ReusableButton";
import UserNotificationCard from "./components/UserNotificationCard";
import { sendNotification } from "../../services/user.service";
const recipientTypes = [
    { label: "All Users", value: "all" },
    { label: "Verified Users", value: "verified" },
    { label: "Unverified Users", value: "unverified" },
    { label: "Suspended Users", value: "suspended" },
];
const UserNotifications = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [recipientType, setRecipientType] = useState("all");
    const [attachments, setAttachments] = useState([]);
    const fileInputRef = useRef(null);
    const handleFileSelect = () => {
        fileInputRef.current.click();
    };
    const handleRemoveAttachments = () => {
        setAttachments([]);
    };
    const sendNotificationHandler = async () => {
        try {
            setIsLoading(true);
            const res = await sendNotification(
                message,
                recipientType,
                attachments
            );
            if (res.status === 200) {
                setIsLoading(false);
                setAttachments([]);
                setMessage("");
                setRecipientType("all");
                // Show success message or handle response
            }
        } catch (err) {
            console.error("Error sending notification:", err);
            setIsLoading(false);
        }
    };
    return (
        <div className="w-full h-full flex flex-col gap-[10px]">
            <UserNotificationCard sectionTitle={"Compose Email"}>
                <textarea
                    placeholder="Type your message here..."
                    className="border border-gray-200 rounded p-2 
                    max-h-[150px] min-h-[150px] w-full bg-white font-roboto text-[14px]"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
            </UserNotificationCard>
            <UserNotificationCard sectionTitle={"Select Recipient type"}>
                {recipientTypes.map((type) => (
                    <label
                        key={type.value}
                        className="flex items-center gap-1 font-dmSans"
                    >
                        <input
                            type="radio"
                            name="recipientType"
                            value={type.value}
                            checked={recipientType === type.value}
                            onChange={() => setRecipientType(type.value)}
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
                    onChange={(e) => {
                        setAttachments(Array.from(e.target.files));
                        e.target.value = "";
                    }}
                />
                <div className="flex flex-row gap-[10px]">
                    <ReusableButton
                        btnText={"Select Files"}
                        classname={`w-[200px] !border-none !rounded-[5px]`}
                        onClick={handleFileSelect}
                    />
                    <ReusableButton
                        btnText={"Remove Attachments"}
                        btnActive={attachments.length === 0}
                        classname={`w-[200px] !border-none !rounded-[5px]`}
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
            <ReusableButton
                btnText={"Send message"}
                classname={`pl-[10px] w-[200px] border-none !rounded-[5px] !bg-red-500 text-white 
                    ${
                        !message
                            ? `!text-gray-300 font-light cursor-not-allowed`
                            : ""
                    }`}
                btnActive={!message}
                onClick={sendNotificationHandler}
                isLoading={isLoading}
            />
        </div>
    );
};

export default UserNotifications;
