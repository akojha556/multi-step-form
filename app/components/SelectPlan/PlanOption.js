import React from "react";

const PlanOption = ({ planOption, subscriptionFee }) => {

     return (
          <div className="border p-3 border-light-gray rounded-lg pr-4 mr-2 cursor-pointer">
               <img src={`/assets/images/icon-${planOption}.svg`} className="w-7" alt="img" />
               <p className="font-bold mt-10">{planOption}</p>
               <p className="text-cool-gray">${subscriptionFee}/mo</p>
               <p className="text-black w-20">2 months free</p>
          </div>
     );
}

export default PlanOption;