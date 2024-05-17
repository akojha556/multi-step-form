import React from "react";

const NameField = (props) => {
     return (
          <div className="mb-4">
               <div className="flex justify-between">
                    <div className="mb-1">{props.fieldName}</div>
                    <div className="font-bold text-red-600">This field is required</div>
               </div>
               <input onChange={props.handleInputChange} name={props.name} value={props.value} className="border rounded w-full p-2 border-cool-gray" placeholder={props.placeholder} autoComplete="off" type={props.name === "email" ? "email" : "text"} />
          </div>
     )
}

export default NameField;