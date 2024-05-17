"use client"
import React, { useState } from "react";
import Step from "./components/Step";
import PersonalInfoForm from "./components/PersonalInfoForm";
import SelectPlanForm from "./components/SelectPlanForm";

const Page = () => {
  const stepTitle = ["YOUR INFO", "SELECT PLANS", "ADD ONS", "SUMMARY"];
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
    <div className="flex relative rounded-2xl bg-white p-2.5 pr-0 shadow-lg my-20 mx-[19rem] w-[45rem]">
      <div>
        <img className="w-48" src="./assets/images/bg-sidebar-desktop.svg" alt="Sidebar Bg" />
        <div className="absolute top-3">
          {stepTitle.map((eachStep, i) =>
            (<Step key={i} currentStep={currentStep} stepNumber={i + 1} stepTitle={eachStep} />))
          }
        </div>
      </div>
      <div>
        <PersonalInfoForm />
        {/* <SelectPlanForm /> */}
        <div className="flex px-10 justify-between items-center mt-4">
          <button className="text-black text-xs w-24" onClick={handlePreviousSteps}>GO Back</button>
          <button className="border rounded-md px-4 py-2 w-24 bg-marine-blue text-white text-xs mr-6" onClick={handleNextStep}>Next Step</button>
        </div>
      </div>
    </div>
  );
}

export default Page;
