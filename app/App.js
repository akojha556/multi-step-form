import { Ubuntu } from "next/font/google";
import React, { useState, useEffect } from "react";
import PersonalInfoForm from "./components/PersonalInfo/PersonalInfoForm";
import SelectPlanForm from "./components/SelectPlan/SelectPlanForm";
import StepSidebar from "./components/StepSidebar/StepSidebar";
import AddOns from "./components/Add-ons/AddOns";
import { useSelector, useDispatch } from "react-redux";
import { setNameStatus, setEmailStatus, setPhoneNumberStatus } from "@/app/features/userInfo/inputStatusSlice";

const ubuntu = Ubuntu({
     weight: ['300', '400', '500', '700'],
     subsets: ['latin']
})

const App = () => {
     const userInfo = useSelector((state) => state.userInfo);
     const inputStatus = useSelector((state) => state.inputStatus);
     const dispatch = useDispatch();

     const [currentStep, setCurrentStep] = useState(1);

     const handlePrevStep = () => {
          if (currentStep > 1) {
               setCurrentStep(currentStep - 1);
          }
     }

     const handleNextStep = () => {
          if (currentStep === 1) {
               dispatch(setNameStatus(userInfo.name.trim() !== ""));
               dispatch(setEmailStatus(userInfo.email.trim() !== ""));
               dispatch(setPhoneNumberStatus(userInfo.phoneNumber.trim() !== ""));

               if (userInfo.name && userInfo.email && userInfo.phoneNumber) {
                    setCurrentStep(2);
               }
          }
     }

     return (
          <div className={`${ubuntu.className} flex rounded-2xl bg-white p-2.5 shadow-xl my-20 mx-[19rem] relative`}>
               <StepSidebar currentStep={currentStep} />
               <div className="flex-col">
                    <div>
                         {currentStep === 1 && <PersonalInfoForm />}
                         {currentStep === 2 && <SelectPlanForm />}
                         {currentStep === 3 && <AddOns />}
                         {/* {currentStep === 4 && <Summery />} */}
                    </div>
                    <div className="flex justify-between ml-16 text-xs font-medium px-4 mt-6 absolute bottom-4 w-[22rem]">
                         <button onClick={handlePrevStep} className={`${currentStep === 1 ? "invisible" : "visible"} text-slate-400 hover:text-blue-950`}>Go Back</button>
                         <button onClick={handleNextStep} className="bg-blue-950 text-white py-2 px-4 rounded-md">Next Step</button>
                    </div>
               </div>
          </div>
     );
}

export default App;