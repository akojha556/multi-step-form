import React, { useContext } from "react";
import { InputStepContext } from "@/app/context/InputStepContext";

const Step = ({ stepNumber, stepInfo }) => {
     const { stepCounter } = useContext(InputStepContext);

     return (
          <div className='flex text-xs ml-4 mt-6'>

               <div className={`${stepCounter === stepNumber ? "text-black font-bold bg-light-blue border" : "text-white font-bold border"} px-3.5 py-2 pt-2.5 rounded-full mr-2`}>{stepNumber}</div>
               <div>
                    <div className='text-light-gray font-light mb-1'>STEP {stepNumber}</div>
                    <div className='text-white font-bold'>{stepInfo}</div>
               </div>
          </div>
     )
}

export default Step