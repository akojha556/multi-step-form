import React from "react";
import NameField from "../components/PersonalInfo/NameField";

const PersonalInfoForm = () => {
     const nameFields = ["Name", "Email Address", "Phone Number"];
     const placeHolders = ["e.g. Stephen King", "e.g. stephenking@lorem.com", "e.g. +1 234 567 890"];
     const label = ["name", "email", "phoneNumber"];
     const inputType = ["text", "email", "tel"];

     return (
          <div className="p-4 pl-16 text-marine-blue text-xs">
               <h1 className="text-marine-blue text-2xl font-bold mb-2">Personal Info</h1>
               <p className="text-cool-gray font-light mb-4">Please provide your name, email address, and phone number</p>
               {nameFields.map((eachField, i) => {
                    return (<NameField key={i} label={eachField} inputName={label[i]} inputType={inputType[i]} placeHolder={placeHolders[i]} />);
               })}
          </div>
     )
}

export default PersonalInfoForm;