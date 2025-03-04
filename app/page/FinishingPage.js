import React, { useContext } from "react";
import { PlanAddOnContext } from "../context/PlanAddOnContext";

const FinishingPage = () => {
     const { planInfo, isMonthly } = useContext(PlanAddOnContext);
     console.log(planInfo);

     return (
          <div className="text-marine-blue text-xs">
               <div className="p-4 pl-16 text-marine-blue">
                    <h1 className="text-marine-blue text-2xl font-bold mb-2">Finishing up</h1>
                    <p className="text-cool-gray font-light mb-4">Double-check everything looks OK before confirming.</p>
                    <div className="bg-gray-200 bg-opacity-50 rounded p-4 pb-2">
                         <div className="flex items-center justify-between align-middle border-b pb-4 mb-3">
                              <div>
                                   <p className="font-bold">{`${planInfo.name}(${isMonthly ? "Monthly" : "Yearly"})`}</p>
                                   <button className="text-gray-400 underline underline-offset-0 hover:text-blue-500">Change</button>
                              </div>
                              <p className="font-bold">${`${planInfo.price}/${isMonthly ? "mo" : "yr"}`}</p>
                         </div>
                         <div className="flex justify-between text-gray-500 mb-2">
                              <p>Online service</p>
                              <p>+$1/mo</p>
                         </div>
                         <div className="flex justify-between text-gray-500">
                              <p>Larger storage</p>
                              <p>+$2/mo</p>
                         </div>
                    </div>
                    <div className="flex items-center justify-between px-4 h-12 mt-2">
                         <p className="text-gray-500">Total (per month)</p>
                         <p className="font-bold text-lg text-blue-500">+$12/mo</p>
                    </div>

               </div>
          </div>
     )
}

export default FinishingPage;