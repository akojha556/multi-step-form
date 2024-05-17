import React, { useState } from "react";
import NameField from "./NameField";

const PersonalInfoForm = () => {
     const [formData, setFormDate] = useState({
          name: "",
          email: "",
          number: ""
     });

     const handleInputChange = (evt) => {
          const { name, value } = evt.target;
          setFormDate((prevValue) => ({
               ...prevValue,
               [name]: value
          }))
     }

     const formFields = [
          { fieldName: "Name", placeholder: "e.g Stephen King", name: "name" },
          { fieldName: "Email Address", placeholder: "e.g stephenking@lorem.com", name: "email" },
          { fieldName: "Phone Number", placeholder: "e.g +1 234 567 890", name: "number" }
     ];

     return (
          <div className="p-4 px-16 text-marine-blue text-xs">
               <h1 className="text-marine-blue text-2xl font-bold mb-2">Personal Info</h1>
               <p className="text-cool-gray font-light mb-4">Please provide your name, email address, and phone number</p>
               {formFields.map((eachField, i) =>
                    <NameField handleInputChange={handleInputChange} key={i}
                         fieldName={eachField.fieldName}
                         placeholder={eachField.placeholder}
                         name={eachField.name}
                         value={formData[eachField.name]} />
               )}
          </div>
     )
}

export default PersonalInfoForm;