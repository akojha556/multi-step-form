import React, { useState } from "react";
import PlanOption from "../components/SelectPlan/PlanOption";
import BillingToggle from "../components/SelectPlan/BillingToggle";

const SelectPlanForm = ({ selectedOption, handleClick }) => {
     const planOptions = [
          { name: "Arcade", price: 9 },
          { name: "Advanced", price: 12 },
          { name: "Pro", price: 15 },
     ]

     const [isMonthly, setIsMonthly] = useState(true);


     return (
          <div className="p-4 pl-16 text-marine-blue text-xs">
               <h1 className="text-marine-blue text-2xl font-bold mb-2">Select your plan</h1>
               <p className="text-cool-gray font-light mb-4">You have the option of monthly or yearly billing.</p>
               <div className="flex justify-between">
                    {planOptions.map((plan) => (
                         <PlanOption
                              key={plan.name}
                              plan={plan}
                              isMonthly={isMonthly}
                              selectedOption={selectedOption}
                              onClick={() => handleClick(plan.name)}
                         />)
                    )}
               </div>
               <BillingToggle isMonthly={isMonthly} setIsMonthly={setIsMonthly} />
          </div>
     )
}

export default SelectPlanForm;