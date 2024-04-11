import React from "react";

const NameField = (props) => {
     return (
          <div className="mb-4">
               <h2 className="mb-1">{props.fieldName}</h2>
               <input className="border rounded w-full p-2 border-cool-gray" placeholder={props.placeholder} />
          </div>
     )
}

export default NameField;