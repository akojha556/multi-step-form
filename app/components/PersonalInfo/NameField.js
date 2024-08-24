import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setName, setEmail, setPhoneNumber } from "@/app/features/userInfo/userInfoSlice";

const NameField = ({ label, placeHolder, inputName, inputType }) => {
     const userInfo = useSelector((state) => state.userInfo);
     const inputStatus = useSelector((state) => state.inputStatus);
     const dispatch = useDispatch();

     const handleChange = (evt) => {
          const { name, value } = evt.target;
          if (name == "name") {
               dispatch(setName(value));
          } else if (name == "email") {
               dispatch(setEmail(value));
          } else {
               if (/^\+?\d*$/.test(value)) {
                    dispatch(setPhoneNumber(value));
               }
          }
     }

     return (
          <div className="mb-4">
               <div className="flex justify-between">
                    <div className="mb-1">{label}</div>
                    {!inputStatus[inputName] && (
                         <div className="text-red-600">This field is required</div>
                    )}

               </div>
               <input type={inputType} onChange={handleChange} name={inputName} value={userInfo[inputName]} className="border focus:outline focus:outline-1 focus:outline-blue-800 rounded w-full p-2 border-cool-gray" placeholder={placeHolder} autoComplete="off" />
          </div>
     )
}

export default NameField;