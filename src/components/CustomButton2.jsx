const CustomButton2 = ({
    onClick,
    btnText,
    active,
    className,
    icon = null,
}) => {
    return (
        <button
            disabled={!active}
            className={`${
                active ? "bg-white cursor-pointer" : "bg-inactiveBtngrey"
            } rounded-[10px] flex items-center justify-center font-bold font-dmSans whitespace-nowrap ${className}`}
            onClick={onClick}
        >
            <div className="flex flex-row justify-around items-center gap-2">
                <p>{btnText}</p>
                {icon && <span>{icon}</span>}
            </div>
        </button>
    );
};

export default CustomButton2;
