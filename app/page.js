"use client"
import React from 'react';
import App from './App';
import { PlanProvider } from './context/PlanContext';
import { InputProvider } from './context/InputContext';
import { StepProvider } from './context/StepContext';

const page = () => {
  return (
    <InputProvider>
      <PlanProvider>
        <StepProvider>
          <App />
        </StepProvider>
      </PlanProvider>
    </InputProvider>
  );
}
export default page;