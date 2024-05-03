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
               <div className="flex justify-between">
                    <p className="font-medium">Monthly</p>
                    <button></button>
                    <p className="font-medium text-cool-gray">Yearly</p>
               </div>
          </div>
     )
}

export default SelectPlanForm;