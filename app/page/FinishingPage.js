import React, { useContext } from "react";
import { PlanAddOnContext } from "../context/PlanAddOnContext";
import { InputStepContext } from "../context/InputStepContext";

const FinishingPage = () => {
     const { addOnSum, setIsAddOnChecked, planInfo, isMonthly, selectedAddOns, setSelectedAddOns } = useContext(PlanAddOnContext);
     const { setStepCounter } = useContext(InputStepContext);

     return (
          <div className="text-marine-blue text-xs">
               <div className="p-4 pl-16 text-marine-blue">
                    <h1 className="text-marine-blue text-2xl font-bold mb-2">Finishing up</h1>
                    <p className="text-cool-gray font-light mb-4">Double-check everything looks OK before confirming.</p>
                    <div className="bg-gray-200 bg-opacity-50 rounded p-4 pb-2">
                         <div className="flex items-center justify-between align-middle border-b pb-4 mb-3">
                              <div>
                                   <p className="font-bold">{`${planInfo.name}(${isMonthly ? "Monthly" : "Yearly"})`}</p>
                                   <button onClick={() => {
                                        setStepCounter(2);
                                        setSelectedAddOns({});
                                        setIsAddOnChecked({
                                             onlineService: false,
                                             largerStorage: false,
                                             customizableProfile: false
                                        })
                                   }} className="text-gray-400 underline underline-offset-0 hover:text-blue-500">Change</button>
                              </div>
                              <p className="font-bold">${`${planInfo.price}/${isMonthly ? "mo" : "yr"}`}</p>
                         </div>
                         {Object.keys(selectedAddOns).map((eachAddOn, i) => {
                              return (
                                   <div key={i} className="flex justify-between text-gray-500 mb-2" >
                                        <p>{eachAddOn}</p>
                                        <p>+${selectedAddOns[eachAddOn]}/{isMonthly ? "mo" : "yr"}</p>
                                   </div>
                              )
                         })}
                    </div>
                    <div className="flex items-center justify-between px-4 h-12 mt-2">
                         <p className="text-gray-500">Total (per month)</p>
                         <p className="font-bold text-lg text-blue-500">+${addOnSum + planInfo.price}/{isMonthly ? "mo" : "yr"}</p>
                    </div>

               </div>
          </div >
     )
}

export default FinishingPage;