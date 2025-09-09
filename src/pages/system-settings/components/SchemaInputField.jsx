const SchemaInputField = ({ inputType, placeholder, value,setValue }) => {
    return (
        <input
            type={inputType}
            className="p-2 border border-gray-300 rounded mb-4 font-dmSans"
            placeholder={`Enter ${placeholder}`}
            value={value}
            onChange={(e) => {setValue(e.target.value)}}
        ></input>
    );
};

export default SchemaInputField;
