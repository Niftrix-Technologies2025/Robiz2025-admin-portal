import LoadingItem from "./LoadingItem";
const LoadingMessage = ({ title, warning ,className,size=15}) => {
    return (
        <div className={`flex flex-col items-center justify-center gap-[10px] font-dmSans ${className}`}>
            <p className="italic">{title}</p>
            <p className="text-[14px] font-light">{warning}</p>
            <LoadingItem size={size} classname={className}/>
        </div>
    );
};

export default LoadingMessage;
