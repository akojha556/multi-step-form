import React from "react";
import PlanOption from "../components/SelectPlan/PlanOption";
import BillingToggle from "../components/SelectPlan/BillingToggle";

const SelectPlanForm = () => {
     const tabOption = [1, 2, 3]

     return (
          <div className="p-4 pl-16 text-marine-blue text-xs">
               <h1 className="text-marine-blue text-2xl font-bold mb-2">Select your plan</h1>
               <p className="text-cool-gray font-light mb-4">You have the option of monthly or yearly billing.</p>
               <div className="flex justify-between">
                    {tabOption.map((tab) => (
                         <PlanOption
                              key={tab}
                              tab={tab}
                         />)
                    )}
               </div>
               <BillingToggle />
          </div>
     )
}

export default SelectPlanForm;