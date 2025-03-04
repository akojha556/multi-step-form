import React from 'react'
import Step from './Step'

const StepSidebar = () => {
     const formSteps = ["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"];

     return (
          <div className="w-48 bg-[url('/assets/images/bg-sidebar-desktop.svg')] bg-contain bg-no-repeat bg-center h-[25rem]">
               {formSteps.map((eachStep, i) => {
                    return (<Step key={i} stepNumber={i + 1} stepInfo={eachStep} />);
               })}
          </div>
     )
}

export default StepSidebar