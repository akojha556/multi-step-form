import React, { useContext } from "react";
import { PlanAddOnContext } from "@/app/context/PlanAddOnContext";

const AddOnOption = ({ addOnOption, addOnDescription }) => {
  //Import functions and state from PlanAddOnContext
  const { addOnPrices, isMonthly, handleChecked, isAddOnChecked } = useContext(PlanAddOnContext);

  //Converts add-on option string to camelCase for function arguments
  const camelCaseAddOn = addOnOption.split(" ").map((word, i) => (
    i === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  )).join("");

  return (
    <div className={`${isAddOnChecked[camelCaseAddOn] ? "border-blue-500" : "border-gray-200"} flex w-[21rem] border rounded p-4 items-center mt-3`}>
      <input checked={isAddOnChecked[camelCaseAddOn]} onChange={() => handleChecked(camelCaseAddOn, addOnPrices[camelCaseAddOn])} className="cursor-pointer" type="checkbox" name={addOnOption} />
      <div className="ml-4">
        <div className="font-bold">{addOnOption}</div>
        <p className="text-slate-400">{addOnDescription}</p>
      </div>
      <div className="text-blue-600 ml-auto">+${addOnPrices[camelCaseAddOn]}</div>
    </div>
  );
}

export default AddOnOption;