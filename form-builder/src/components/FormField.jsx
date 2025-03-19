    import React from 'react';
    import { useFormContext } from '../context/FormContext';

    const FormField = ({ field }) => {
    const { updateField, removeField } = useFormContext();

    const handleChange = (e) => {
        updateField(field.id, { [e.target.name]: e.target.value });
    };

    return (
        <div>
        <input
            type="text"
            name="label"
            value={field.label}
            placeholder="Field Label"
            onChange={handleChange}
        />
        {field.type === 'checkbox' ? (
            <input
            type="checkbox"
            name="value"
            checked={field.value}
            onChange={(e) => updateField(field.id, { value: e.target.checked })}
            />
        ) : (
            <input
            type={field.type}
            name="value"
            value={field.value}
            placeholder={`Enter ${field.type}`}
            onChange={handleChange}
            />
        )}
        <input
            type="checkbox"
            checked={field.required}
            onChange={() => updateField(field.id, { required: !field.required })}
        />
        <label>Required</label>
        <button onClick={() => removeField(field.id)}>Remove Field</button>
        </div>
    );
    };

    export default FormField;
