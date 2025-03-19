import React from 'react';
import { useFormContext } from '../context/FormContext';
import './FormField.css';

const FormField = ({ field }) => {
    const { updateField, removeField } = useFormContext();

    const handleChange = (e) => {
        updateField(field.id, { [e.target.name]: e.target.value });
    };

    return (
        <div className="form-field">
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
            <div>
                <input
                    type="checkbox"
                    checked={field.required}
                    onChange={() => updateField(field.id, { required: !field.required })}
                />
                <label>Required</label>
            </div>
            <button onClick={() => removeField(field.id)}>Remove Field</button>
        </div>
    );
};

export default FormField;