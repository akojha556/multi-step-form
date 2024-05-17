import React from "react";

const Step = ({currentStep, stepNumber, stepTitle}) => {

     return (
          <div className="flex items-center ml-6 mt-6 text-xs">
               <p className={`flex justify-center items-center w-7 h-7 rounded-full mr-2 font-semibold border-light-blue ${currentStep === stepNumber ? "bg-light-blue text-black" : "text-light-blue"}  border`}>{stepNumber}</p>
               <div>
                    <p className="text-light-gray font-light">STEP {stepNumber}</p>
                    <p className="font-medium text-white">{stepTitle}</p>
               </div>
          </div>
     );
}

export default Step;