import React from "react";
import SubscriptionCard from "./SubscriptionCard";

const SelectPlanForm = () => {
     const imageSrc = ["assets/images/icon-arcade.svg", "assets/images/icon-advanced.svg", "assets/images/icon-pro.svg"];
     const plan = ["Arcade", "Advanced", "Pro"];
     const subscriptionFee = ["$9/month", "$12/month", "$15/month"];

     return (
          <div className="p-4 px-16 text-marine-blue text-xs">
               <h1 className="text-marine-blue text-2xl font-bold mb-2">Select your plan</h1>
               <p className="text-cool-gray font-light mb-4">You have the option of monthly or yearly billing.</p>
               <div className="flex justify-between">
                    {imageSrc.map((src, index) => (
                         <SubscriptionCard
                              key={index}
                              imageSrc={src}
                              plan={plan[index]}
                              subscriptionFee={subscriptionFee[index]}

                         />)
                    )}
               </div>
               <div className="flex justify-between bg-gray-100/50 rounded-lg mt-4 p-4 px-[8rem]">
                    <button className="font-medium">Monthly</button>
                    <div className="bg-marine-blue w-8 h-4 rounded-3xl relative">
                         <div className="w-3 h-3 rounded-full bg-white absolute top-0.5 left-0.5 transition-transform ease-in-out"></div>
                    </div>
                    <button className="font-medium text-cool-gray">Yearly</button>
               </div>
          </div>
     )
}

export default SelectPlanForm;


         /*<button className={`px-4 py-2 border rounded ${togglePosition === 0 ? 'bg-gray-300' : ''}`} onClick={handleMonthlyClick}>Monthly</button>
          <div className="relative w-20 h-8 bg-gray-300 cursor-pointer">
            <div className="absolute top-0 left-0 w-10 h-8 bg-white rounded-full transition-transform duration-300 ease-in-out" style={{ transform: `translateX(${togglePosition === 0 ? 0 : '100%'})` }}>
            </div>
          </div>
          <button className={`px-4 py-2 border rounded ${togglePosition === 1 ? 'bg-gray-300' : ''}`} onClick={handleYearlyClick}>Yearly</button>*/
