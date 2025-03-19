import React from 'react';
import { useFormContext } from '../context/FormContext';
import './FormPreview.css';

const FormPreview = () => {
  const { fields } = useFormContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form Submitted');
  };

  return (
    <div className="form-preview">
      <h2>Form Preview</h2>
      <form onSubmit={handleSubmit}>
        {fields.map((field) => (
          <div key={field.id}>
            <label>{field.label}</label>
            {field.type === 'checkbox' ? (
              <input type="checkbox" checked={field.value} readOnly />
            ) : (
              <input type={field.type} value={field.value} readOnly />
            )}
            {field.required && <span> (Required)</span>}
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormPreview;