const UserNotificationCard = ({ sectionTitle, children, className }) => {
    return (
        <div className={`flex flex-col ${className}`}>
            <p className="pl-[10px] font-dmSans font-bold text-[22px] max-sm:text-[18px]">
                {sectionTitle}
            </p>
            <div className="bg-white rounded-[10px] p-3">{children}</div>
        </div>
    );
};

export default UserNotificationCard;
