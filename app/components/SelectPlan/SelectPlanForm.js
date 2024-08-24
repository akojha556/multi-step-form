import React from "react";
import PlanOption from "./PlanOption";
import BillingToggle from "./BillingToggle";

const SelectPlanForm = () => {
     const planOptions = ["Arcade", "Advanced", "Pro"];
     const subscriptionFee = [9, 12, 15];

     return (
          <div className="p-4 pl-16 text-marine-blue text-xs">
               <h1 className="text-marine-blue text-2xl font-bold mb-2">Select your plan</h1>
               <p className="text-cool-gray font-light mb-4">You have the option of monthly or yearly billing.</p>
               <div className="flex justify-between">
                    {planOptions.map((eachOption, i) => {
                         return (<PlanOption key={i} planOption={eachOption} subscriptionFee={subscriptionFee[i]} />)
                    })}
               </div>
               <BillingToggle />
          </div>
     )
}

export default SelectPlanForm;