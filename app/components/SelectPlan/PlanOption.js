import React, { useContext } from "react";
import { PlanAddOnContext } from "@/app/context/PlanAddOnContext";

const PlanOption = ({ tab }) => {
     //Import plan details and states from PlanAddOnContext
     const { handlePlanSelect, isMonthly, planOptionNames, planPrices, selectedOption } = useContext(PlanAddOnContext);

     //sets each plan name
     const planName = planOptionNames[tab - 1];
     //sets each plan price
     const planPrice = planPrices[planName];
     //sets which plan is selected
     const selectedPlan = selectedOption[planName];


     return (
          <div onClick={() => { handlePlanSelect(planName) }} className={`border p-3 rounded-lg pr-4 mr-2 cursor-pointer w-[7rem] hover:border-opacity-80 ${selectedPlan ? "border-indigo-800" : "border-grey-500"}`}>
               <img src={`/assets/images/icon-${planName}.svg`} className="w-7" alt="img" />
               <p className="font-bold mt-10">{planName}</p>
               <p className="text-cool-gray">{`${isMonthly ? planPrice + "/mo" : planPrice + "/yr"}`}</p>
               <p className={`${isMonthly ? "hidden" : "block"} text-black w-20`}>2 months free</p>
          </div>
     );
}

export default PlanOption;