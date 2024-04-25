"use client"
import React, { useState } from "react";
import PersonalInfoForm from "./components/PersonalInfoForm";

const Page = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  }

  const handlePreviousSteps = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  }

  return (
    <div className="flex relative rounded-2xl bg-white p-2.5 pr-0 shadow-lg my-20 mx-[19rem]">
      <div>
        <img className="w-48" src="./assets/images/bg-sidebar-desktop.svg" alt="Sidebar Bg" />
        <div className="absolute top-3">
          {/* Step 1 */}
          <div className="flex items-center ml-6 mt-6 text-xs">
            <p className={`flex justify-center items-center w-7 h-7 rounded-full mr-2 font-semibold border-light-blue ${currentStep === 1 ? "bg-light-blue text-black" : "text-light-blue"}  border`}>1</p>
            <div>
              <p className="text-light-gray font-light">STEP 1</p>
              <p className="font-medium text-white">YOUR INFO</p>
            </div>
          </div>
          {/* Step 2 */}
          <div className="flex items-center ml-6 mt-6 text-xs">
            <p className={`flex justify-center items-center w-7 h-7 rounded-full mr-2 font-semibold border-light-blue ${currentStep === 2 ? "bg-light-blue text-black" : "text-light-blue"}  border`}>2</p>
            <div>
              <p className="text-light-gray font-light">STEP 2</p>
              <p className="font-medium text-white">SELECT PLAN</p>
            </div>
          </div>
          {/* Step 3 */}
          <div className="flex items-center ml-6 mt-6 text-xs">
            <p className={`flex justify-center items-center w-7 h-7 rounded-full mr-2 font-semibold border-light-blue ${currentStep === 3 ? "bg-light-blue text-black" : "text-light-blue"}  border`}>3</p>
            <div>
              <p className="text-light-gray font-light">STEP 3</p>
              <p className="font-medium text-white">ADD ONS</p>
            </div>
          </div>
          {/* Step 4 */}
          <div className="flex items-center ml-6 mt-6 text-xs">
            <p className={`flex justify-center items-center w-7 h-7 rounded-full mr-2 font-semibold border-light-blue ${currentStep === 4 ? "bg-light-blue text-black" : "text-light-blue"}  border`}>4</p>
            <div>
              <p className="text-light-gray font-light">STEP 4</p>
              <p className="font-medium text-white">SUMMERY</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <PersonalInfoForm />
        <div className="flex px-10 justify-between items-center mt-10">
          <button className="text-black text-xs w-24" onClick={handlePreviousSteps}>GO Back</button>
          <button className="border rounded-md px-4 py-2 w-24 bg-marine-blue text-white text-xs mr-6" onClick={handleNextStep}>Next Step</button>
        </div>
      </div>
    </div>
  );
}

export default Page;