import React from 'react'
import Step from './Step'

const StepSidebar = () => {
     const formSteps = ["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"];

     return (
          <div className='sidebar h-10'>
               {formSteps.map((eachStep, i) => {
                    return (<Step key={i} stepName={i + 1} stepInfo={eachStep} />);
               })}
          </div>
     )
}

export default StepSidebar