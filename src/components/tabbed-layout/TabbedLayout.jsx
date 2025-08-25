import TabbedLayoutItem from "./TabbedLayoutItem";

const TabbedLayout = ({ items }) => {
    return (
        <div
            className="fixed flex flex-row h-[40px] w-full items-center justify-start 
        gap-[10px] bg-white py-[25px] pl-[10px] overflow-x-auto scrollbar-hide"
        >
            {items.map((item, index) => (
                <TabbedLayoutItem key={index} item={item} />
            ))}
        </div>
    );
};

export default TabbedLayout;
