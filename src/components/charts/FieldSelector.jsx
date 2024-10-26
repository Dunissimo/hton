export const FieldSelector = ({ fields, selectedFields, onSelectionChange }) => {
    const handleFieldChange = (field) => {
        const newSelection = { ...selectedFields, [field]: !selectedFields[field] };
        onSelectionChange(newSelection);
    };

    return (
        <div>
            <h3>Выберите поля для диаграммы:</h3>
            {fields.map((field) => (
                <label key={field}>
                    <input
                        type="checkbox"
                        checked={selectedFields[field]}
                        onChange={() => handleFieldChange(field)}
                    />
                    {field}
                </label>
            ))}
        </div>
    );
};