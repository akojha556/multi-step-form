import React from "react";

const PlanOption = ({ planOption, subscriptionFee, isMonthly }) => {

     return (
          <div className="border p-3 border-light-gray rounded-lg pr-4 mr-2 cursor-pointer w-[7rem] hover:border-blue-800 accent-indigo-800">
               <img src={`/assets/images/icon-${planOption}.svg`} className="w-7" alt="img" />
               <p className="font-bold mt-10">{planOption}</p>
               <p className="text-cool-gray">{`${isMonthly ? subscriptionFee + "/mo" : subscriptionFee * 10 + "/yr"}`}</p>
               <p className={`${isMonthly ? "hidden" : "block"} text-black w-20`}>2 months free</p>
          </div>
     );
}

export default PlanOption;