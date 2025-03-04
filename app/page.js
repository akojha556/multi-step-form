"use client"
import React from 'react';
import App from './App';
import { InputStepProvider } from './context/InputStepContext';
import { PlanAddOnProvider } from './context/PlanAddOnContext';

const page = () => {
  return (
    <PlanAddOnProvider>
      <InputStepProvider>
        <App />
      </InputStepProvider>
    </PlanAddOnProvider>
  );
}
export default page;