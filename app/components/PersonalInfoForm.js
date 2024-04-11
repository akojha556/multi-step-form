import React from "react";
import NameField from "./NameField";

const PersonalInfoForm = () => {
     return (
          <div className="p-4 px-16 text-marine-blue text-xs">
               <h1 className="text-marine-blue text-2xl font-bold mb-2">Personal Info</h1>
               <p className="text-cool-gray font-light mb-4">Please provide your name, email address, and phone number</p>
               {[1, 2, 3].map((itemNo) =>
                    <NameField key={itemNo}
                         fieldName={["Name", "Email Address", "Phone Number"][itemNo - 1]}
                         placeholder={["e.g Stephen King", "e.g stephenking@lorem.com", "e.g +1 234 567 890"][itemNo - 1]} />
               )}
          </div>
     )
}

export default PersonalInfoForm;