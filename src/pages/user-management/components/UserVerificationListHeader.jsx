const UserVerificationListHeader = () => {
    return (
        <div
            className="flex flex-row font-dmSans items-center justify-between truncate 
        gap-[5px] px-[8px] max-w-[800px] flex-shrink-0 border-[0.5px]"
        >
            <p className="w-[30px] truncate">No</p>
            <p className="w-[40px] truncate">ID</p>
            <p className="w-[120px] truncate">FirstName</p>
            <p className="w-[120px] truncate">LastName</p>
            <p className="w-[250px] truncate">Email ID</p>
            <p className="w-[100px] truncate">Verify User</p>
        </div>
    );
};

export default UserVerificationListHeader;
