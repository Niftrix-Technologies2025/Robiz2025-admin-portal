import LoadingItem from "./LoadingItem";
const ReusableButton = ({
    btnText,
    btnActive,
    icon,
    title,
    classname,
    onClick,
    isLoading = false,
}) => {
    return (
        <button
            disabled={btnActive || isLoading}
            title={title}
            className={`flex flex-row items-center justify-center bg-white rounded-[10px] 
              p-[5px] gap-[2px] text-[14px] border-[1px] border-gray-500  ${classname} ${
                btnActive
                    ? "text-gray-400"
                    : `text-black cursor-pointer shadow-sm 
                    hover:shadow-md transition-all duration-150`
            } `}
            onClick={onClick}
        >
            {isLoading ? (
                <LoadingItem size={10} classname="py-[3.5px]" />
            ) : (
                <>
                    {btnText && (
                        <p className={`font-dmSans whitespace-nowrap`}>
                            {btnText}
                        </p>
                    )}
                    {icon && icon}
                </>
            )}
        </button>
    );
};

export default ReusableButton;
