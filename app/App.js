import { Ubuntu } from "next/font/google";
import React, { useContext } from "react";
import StepSidebar from "./components/StepSidebar/StepSidebar";
import PersonalInfoForm from "./page/PersonalInfoForm";
import SelectPlanForm from "./page/SelectPlanForm";
import AddOns from "./page/AddOns";
import { InputStepContext } from "./context/InputStepContext";
import FinishingPage from "./page/FinishingPage";

const ubuntu = Ubuntu({
     weight: ['300', '400', '500', '700'],
     subsets: ['latin']
});

const App = () => {
     const {stepCounter, handleNextStep, handlePreviousStep} = useContext(InputStepContext);

     const renderStepComponent = () => {
          switch (stepCounter) {
               case 1:
                    return <PersonalInfoForm/>;
               case 2:
                    return <SelectPlanForm />;
               case 3:
                    return <AddOns />;
               case 4:
                    return <FinishingPage />;
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