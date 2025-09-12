const TabbedIndexLayoutItem = ({ item, isActive }) => {
    return (
        <div
            className={`${
                isActive
                    ? "bg-gradient-to-r from-[#FCBB12] to-[#FAFF00]"
                    : "bg-white"
            } rounded-[10px] px-[10px] py-[8px] font-dmSans text-[15px] cursor-pointer`}
        >
            <p>{item.label}</p>
        </div>
    );
};

export default TabbedIndexLayoutItem;
