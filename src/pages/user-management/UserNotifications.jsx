import { useState, useRef } from "react";
import ReusableButton from "../../components/ReusableButton";
import UserNotificationCard from "./components/UserNotificationCard";
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
    const sendNotificationHandler = () => {
        try {
            setIsLoading(true);
            if (res.status === 200) {
                setIsLoading(false);
                // Show success message or handle response
            }
        } catch (err) {
            console.error("Error sending notification:", err);
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
                    onChange={(e) => setAttachments(Array.from(e.target.files))}
                />
                <div className="flex flex-row gap-[10px]">
                    <ReusableButton
                        btnText={"Select Files"}
                        classname={`w-[200px] !border-none !rounded-[5px]`}
                        onClick={handleFileSelect}
                    />
                    <ReusableButton
                        btnText={"Remove Attachments"}
                        btnActive={!attachments.length > 0}
                        classname={`w-[200px] !border-none !rounded-[5px]`}
                        onClick={handleRemoveAttachments}
                    />
                </div>

                {attachments.length > 0 && (
                    <ul className="flex flex-row flex-wrap gap-[5px] mt-2 text-sm text-gray-700">
                        {attachments.map((file, idx) => (
                            <li
                                className="bg-gray-600 text-white rounded-[5px] p-[3px]"
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
                classname={`w-[200px]`}
                onClick={sendNotificationHandler}
            />
        </div>
    );
};

export default UserNotifications;
