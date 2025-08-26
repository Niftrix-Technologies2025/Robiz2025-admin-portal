const ReusableButton = ({
    btnText,
    btnActive,
    icon,
    title,
    classname,
    onClick,
}) => {
    return (
        <button
            disabled={btnActive}
            title={title}
            className={`flex flex-row items-center justify-center bg-white rounded-[10px] 
              p-[5px] gap-[2px] border-[1px] border-gray-500 shadow-sm hover:shadow-md 
              transition-all duration-150 ${classname} ${
                btnActive ? "text-gray-400" : "text-black cursor-pointer"
            } `}
            onClick={onClick}
        >
            {btnText && (
                <p className={`font-dmSans text-[14px] whitespace-nowrap`}>
                    {btnText}
                </p>
            )}
            {icon && icon}
        </button>
    );
};

export default ReusableButton;
