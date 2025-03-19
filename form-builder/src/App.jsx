import React from 'react';
import { FormProvider } from '../src/context/FormContext';
import FormBuilder from './components/FormBuilder';
import FormPreview from './components/FormPreview';

const App = () => {
  return (
    <FormProvider>
      <FormBuilder />
      <FormPreview />
    </FormProvider>
  );
};

export default App;
