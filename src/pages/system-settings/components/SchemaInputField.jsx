const SchemaInputField = ({ inputType, placeholder, value,setValue,isLoading }) => {
    return (
        <input
            type={inputType}
            className="p-2 border border-gray-300 rounded mb-4 font-dmSans disabled:text-gray-400 disabled:border-gray-200"
            placeholder={`Enter ${placeholder}`}
            value={value}
            onChange={(e) => {setValue(e.target.value)}}
            disabled={isLoading}
        ></input>
    );
};

export default SchemaInputField;
