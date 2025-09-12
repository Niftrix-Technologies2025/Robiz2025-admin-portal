import TabbedIndexLayoutItem from "./TabbedIndexLayoutItem";

const TabbedIndexLayout = ({ items, activeIndex, onChange }) => {
    return (
        <div
            className="bg-white w-full flex flex-row gap-[35px] px-[45px] py-[12px] 
        border-b-[1px] border-inputBorder"
        >
            {items.map((item, index) => (
                <TabbedIndexLayoutItem
                    key={index}
                    item={item}
                    onClick={() => onChange(index)}
                    isActive={index === activeIndex}
                />
            ))}
        </div>
    );
};

export default TabbedIndexLayout;
