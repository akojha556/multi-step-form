import { Ubuntu } from "next/font/google";
import React, { useState } from "react";
import StepSidebar from "./components/StepSidebar/StepSidebar";
import PersonalInfoForm from './page/PersonalInfoForm';
import SelectPlanForm from "./page/SelectPlanForm";

const ubuntu = Ubuntu({
     weight: ['300', '400', '500', '700'],
     subsets: ['latin']
});

const App = () => {
     const [inputValue, setInputValue] = useState({
          name: "",
          email: "",
          phoneNumber: ""
     });
     const [stepCounter, setStepCounter] = useState(1);
     const [hasValue, setHasValue] = useState({
          name: true,
          email: true,
          phoneNumber: true
     });

     const handleChange = (evt) => {
          const { name, value } = evt.target;
          //Only Phone Number
          if (name === "phoneNumber" && (!/^\+?\d*$/.test(value) || value.length > 13)) {
               return;
          }
          //All inputs updates with valid value
          setInputValue((prevValue) => ({ ...prevValue, [name]: value }));
     };

     //Action Button Functions
     const handleNextStep = () => {
          setHasValue((prevValue) => ({
               name: inputValue["name"].length > 0,
               email: inputValue["email"].length > 0,
               phoneNumber: inputValue["phoneNumber"].length > 0
          }));

          if (inputValue.name.length > 0 && inputValue.email.length > 0 && inputValue.phoneNumber.length > 0) {
               setStepCounter(2);
          }
     }

     const handlePreviousStep = () => {
          setStepCounter(1);

     };

     const renderStepComponent = () => {
          switch (stepCounter) {
               case 1:
                    return <PersonalInfoForm inputValue={inputValue} hasValue={hasValue} handleChange={handleChange} />;
               case 2:
                    return <SelectPlanForm />;
               default:
                    return null;
          }
     };

     return (
          <div className={`${ubuntu.className} flex rounded-2xl bg-white p-2.5 shadow-xl my-20 mx-[19rem]`}>
               <StepSidebar />
               <div className="flex-col relative">
                    <div className="text-xs font-medium w-[26rem]">
                         {renderStepComponent()}
                    </div>
                    {/* Acton Button */}
                    <div className="flex absolute bottom-0 left-0 right-0 justify-between ml-16 mr-4">
                         <button onClick={handlePreviousStep} className={`${stepCounter === 1 ? "invisible" : "visible"} text-slate-400 hover:text-blue-950`}>Go Back</button>
                         <button onClick={handleNextStep} className="bg-blue-950 text-white hover:bg-blue-900 py-2 px-4 rounded-md">Next Step</button>
                    </div>
               </div>
          </div>
     );
}

export default App;