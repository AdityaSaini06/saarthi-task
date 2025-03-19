    import React, { useEffect } from 'react';
    import { useFormContext } from '../context/FormContext';
    import FormField from './FormField';
    import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

    const FormBuilder = () => {
    const { fields, addField, saveForm, loadForm, reorderFields } = useFormContext();

    useEffect(() => {
        loadForm();
    }, []);

    const handleDragEnd = (result) => {
        const { destination, source } = result;
        if (!destination) return;
        reorderFields(source.index, destination.index);
    };

    return (
        <div>
        <h2>Form Builder</h2>
        <button onClick={() => addField('text')}>Add Text Field</button>
        <button onClick={() => addField('number')}>Add Number Field</button>
        <button onClick={() => addField('date')}>Add Date Field</button>
        <button onClick={() => addField('checkbox')}>Add Checkbox</button>

        <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="fields" direction="vertical">
            {(provided) => (
                <ul ref={provided.innerRef} {...provided.droppableProps}>
                {fields.map((field, index) => (
                    <Draggable key={field.id} draggableId={field.id.toString()} index={index}>
                    {(provided) => (
                        <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        <FormField field={field} />
                        </li>
                    )}
                    </Draggable>
                ))}
                {provided.placeholder}
                </ul>
            )}
            </Droppable>
        </DragDropContext>

        <button onClick={saveForm}>Save Form</button>
        </div>
    );
    };

    export default FormBuilder;
