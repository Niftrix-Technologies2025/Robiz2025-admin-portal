const ReusableMessage = ({ displayText, icon }) => {
    return (
        <div
            className="flex flex-col font-dmSans items-center justify-center 
            w-full h-full text-gray-700"
        >
            {displayText && <p className="text-center">{displayText}</p>}
            {icon && icon}
        </div>
    );
};

export default ReusableMessage;
