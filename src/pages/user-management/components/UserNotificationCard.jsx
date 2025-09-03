const UserNotificationCard = ({ sectionTitle, children, className }) => {
    return (
        <div className={`flex flex-col ${className}`}>
            <p className="pl-[10px] font-dmSans font-bold text-[22px] max-sm:text-[18px]">
                {sectionTitle}
            </p>
            <div className="bg-white rounded-[10px] p-[15px] border-gray-200 border-[1.5px]">{children}</div>
        </div>
    );
};

export default UserNotificationCard;
