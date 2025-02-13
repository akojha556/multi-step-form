import React from "react";

const PlanOption = ({ plan, isMonthly, selectedOption, onClick }) => {
     return (
          <div onClick={onClick} className={`border p-3 rounded-lg pr-4 mr-2 cursor-pointer w-[7rem] hover:border-opacity-80 ${selectedOption[plan.name]? "border-indigo-800": "border-grey-500"}`}>
               <img src={`/assets/images/icon-${plan.name}.svg`} className="w-7" alt="img" />
               <p className="font-bold mt-10">{plan.name}</p>
               <p className="text-cool-gray">{`${isMonthly ? plan.price + "/mo" : plan.price * 10 + "/yr"}`}</p>
               <p className={`${isMonthly ? "hidden" : "block"} text-black w-20`}>2 months free</p>
          </div>
     );
}

export default PlanOption;