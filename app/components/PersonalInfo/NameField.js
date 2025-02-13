import React from "react";

const NameField = ({ label, inputName, inputType, placeHolder, inputValue, hasValue, handleChange }) => {


     return (
          <div className="mb-4">
               <div className="flex justify-between">
                    <div className="mb-1">{label}</div>
                    <div className={`mb-1 ${hasValue ? "invisible" : "visible"} font-bold text-red-600`}>This field is required</div>
               </div>
               <input onChange={handleChange} value={inputValue} type={inputType} name={inputName} className={`border ${hasValue ? "border-cool-gray" : "border-red-800"} focus:outline focus:outline-1 focus:outline-blue-800 rounded w-full p-2`} placeholder={placeHolder} autoComplete="off" />
          </div>
     )
}

export default NameField;