import React, { useContext } from "react";
import { InputContext } from "@/app/context/InputContext";

const NameField = ({ label, inputName, inputType, placeHolder }) => {
     const { inputValue, hasValue, handleChange } = useContext(InputContext);
     const nameValue = inputValue[inputName];
     const hasInputValue = hasValue[inputName];

     return (
          <div className="mb-4">
               <div className="flex justify-between">
                    <div className="mb-1">{label}</div>
                    <div className={`mb-1 ${hasValue ? "invisible" : "visible"} font-bold text-red-600`}>This field is required</div>
               </div>
               <input onChange={handleChange} value={nameValue} type={inputType} name={inputName} className={`border ${hasInputValue ? "border-cool-gray" : "border-red-800"} focus:outline focus:outline-1 focus:outline-blue-800 rounded w-full p-2`} placeholder={placeHolder} autoComplete="off" />
          </div>
     )
}

export default NameField;