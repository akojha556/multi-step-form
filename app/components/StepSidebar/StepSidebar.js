import React from 'react'
import Step from './Step'

const StepSidebar = ({ currentStep }) => {
     const formSteps = ["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"];

     return (
          <div className='sidebar h-10'>
               {formSteps.map((eachStep, i) => {
                    return (<Step key={i} stepNumber={i + 1} stepInfo={eachStep} currentStep={currentStep} />);
               })}
          </div>
     )
}

export default StepSidebar