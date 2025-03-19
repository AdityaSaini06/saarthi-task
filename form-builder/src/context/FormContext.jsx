    import React, { createContext, useState, useContext } from 'react';

    const FormContext = createContext();

    export const useFormContext = () => useContext(FormContext);

    export const FormProvider = ({ children }) => {
    const [fields, setFields] = useState([]);
    const [formData, setFormData] = useState({});

    const addField = (type) => {
        const newField = { id: Date.now(), type, label: '', value: '', required: false };
        setFields((prevFields) => [...prevFields, newField]);
    };

    const removeField = (id) => {
        setFields((prevFields) => prevFields.filter((field) => field.id !== id));
    };

    const updateField = (id, updatedField) => {
        setFields((prevFields) =>
        prevFields.map((field) => (field.id === id ? { ...field, ...updatedField } : field))
        );
    };

    const saveForm = () => {
        localStorage.setItem('formData', JSON.stringify(fields));
    };

    const loadForm = () => {
        const savedForm = JSON.parse(localStorage.getItem('formData'));
        if (savedForm) {
        setFields(savedForm);
        }
    };

    const reorderFields = (dragIndex, hoverIndex) => {
        const reorderedFields = [...fields];
        const [draggedField] = reorderedFields.splice(dragIndex, 1);
        reorderedFields.splice(hoverIndex, 0, draggedField);
        setFields(reorderedFields);
    };

    return (
        <FormContext.Provider
        value={{
            fields,
            formData,
            addField,
            removeField,
            updateField,
            saveForm,
            loadForm,
            reorderFields,
        }}
        >
        {children}
        </FormContext.Provider>
    );
    };
