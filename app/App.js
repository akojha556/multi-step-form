import { Ubuntu } from "next/font/google";
import React from "react";
import PersonalInfoForm from "./components/PersonalInfo/PersonalInfoForm";
import SelectPlanForm from "./components/SelectPlan/SelectPlanForm";
import StepSidebar from "./components/StepSidebar/StepSidebar";
import AddOns from "./components/Add-ons/AddOns";
import { useSelector, useDispatch } from "react-redux";
import { setNameStatus, setEmailStatus, setPhoneNumberStatus } from "@/app/features/userInfo/inputStatusSlice";

const ubuntu = Ubuntu({
     weight: ['300', '400', '500', '700'],
     subsets: ['latin']
})

const App = () => {
     const userInfo = useSelector((state) => state.userInfo);
     const inputStatus = useSelector((state) => state.inputStatus);
     const dispatch = useDispatch();

     const handleClick = () => {
          dispatch(setNameStatus(userInfo.name.trim() !== ""));
          dispatch(setEmailStatus(userInfo.email.trim() !== ""));
          dispatch(setPhoneNumberStatus(userInfo.phoneNumber.trim() !== ""));
     }

     return (
          <div className={`${ubuntu.className} flex rounded-2xl bg-white p-2.5 shadow-xl my-20 mx-[19rem]`}>
               <StepSidebar />
               <div className="flex-col">
                    <div>
                         <PersonalInfoForm />
                         {/* <SelectPlanForm /> */}
                         {/* <AddOns /> */}
                    </div>
                    <div className="flex justify-between ml-16 text-xs font-medium px-4 mt-6">
                         <button className="text-slate-400 hover:text-blue-950">Go Back</button>
                         <button onClick={handleClick} className="bg-blue-950 text-white py-2 px-4 rounded-md">Next Step</button>
                    </div>
               </div>
          </div>
     );
}

export default App;