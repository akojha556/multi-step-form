import React, { useContext, useEffect } from "react";
import { PlanAddOnContext } from "@/app/context/PlanAddOnContext";

const BillingToggle = () => {
     //Imports isMonthly and state from PlanAddOncontext
     const { setSelectedAddOns, setIsAddOnChecked, isMonthly, setIsMonthly, planPrices, setPlanPrices, setAddOnPrices, setPlanInfo } = useContext(PlanAddOnContext);

     const handleMonthly = () => {
          setIsMonthly(true);
          setPlanPrices({ Arcade: 9, Advanced: 12, Pro: 15 });
          setAddOnPrices({ onlineService: 1, largerStorage: 2, customizableProfile: 2 });
          setSelectedAddOns({});
          setIsAddOnChecked({
               onlineService: false,
               largerStorage: false,
               customizableProfile: false
          });
     };

     const handleYearly = () => {
          setIsMonthly(false);
          setPlanPrices({ Arcade: 90, Advanced: 120, Pro: 150 });
          setAddOnPrices({ onlineService: 10, largerStorage: 20, customizableProfile: 20 });
          setSelectedAddOns({});
          setIsAddOnChecked({
               onlineService: false,
               largerStorage: false,
               customizableProfile: false
          });
     };

     //handles effect when user switch plan section from monthly to yearly or vice versa
     useEffect(() => {
          setPlanInfo((prevValue) => {
               console.log(planPrices[prevValue.name]);

               return {
                    ...prevValue,
                    price: planPrices[prevValue.name]
               }
          });
     }, [planPrices]);

     return (
          <div className="flex justify-between bg-gray-100/50 rounded-lg mt-4 p-4 px-[6rem]">
               <button onClick={handleMonthly} className={`font-medium ${isMonthly ? "text-marine-blue" : "text-cool-gray"}`}>Monthly</button>
               <div className="bg-marine-blue w-8 h-4 rounded-3xl mx-4 relative">
                    <div className={`w-3 h-3 rounded-full bg-white absolute top-0.5 left-0.5 transition-transform ease-in-out duration-300 ${isMonthly ? "translate-x-0" : "translate-x-[1rem]"}`}></div>
               </div>
               <button onClick={handleYearly} className={`font-medium ${isMonthly ? "text-cool-gray" : "text-marine-blue"}`}>Yearly</button>
          </div>
     );
}

export default BillingToggle