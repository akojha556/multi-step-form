import React from "react";
import NameField from "../components/PersonalInfo/NameField";

const PersonalInfoForm = () => {
     const fields = [
          { label: "Name", type: "text", placeHolder: "e.g. Stephen King", name: "name" },
          { label: "Email Address", type: "email", placeHolder: "e.g. stephenking@lorem.com", name: "email" },
          { label: "Phone Number", type: "tel", placeHolder: "e.g. +1 234 567 890", name: "phoneNumber" },
     ]

     return (
          <div className="p-4 pl-16 text-marine-blue text-xs">
               <h1 className="text-marine-blue text-2xl font-bold mb-2">Personal Info</h1>
               <p className="text-cool-gray font-light mb-4">Please provide your name, email address, and phone number</p>
               {fields.map((field, i) => (
                    <NameField
                         key={i}
                         label={field.label}
                         inputName={field.name}
                         inputType={field.type}
                         placeHolder={field.placeHolder}
                    />
               ))}
          </div>
     )
}

export default PersonalInfoForm;