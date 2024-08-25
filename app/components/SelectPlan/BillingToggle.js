import React from 'react'

const BillingToggle = ({ isMonthly, setIsMonthly }) => {
     const handleMonthly = () => {
          setIsMonthly(true);
     }

     const handleYearly = () => {
          setIsMonthly(false)
     }

     return (
          <div className="flex justify-between bg-gray-100/50 rounded-lg mt-4 p-4 px-[6rem]">
               <button onClick={handleMonthly} className={`font-medium ${isMonthly ? "text-marine-blue" : "text-cool-gray"}`}>Monthly</button>
               <div className="bg-marine-blue w-8 h-4 rounded-3xl mx-4 relative">
                    <div className={`w-3 h-3 rounded-full bg-white absolute top-0.5 left-0.5 transition-transform ease-in-out duration-300 ${isMonthly ? "translate-x-0" : "translate-x-[1rem]"}`}></div>
               </div>
               <button onClick={handleYearly} className={`font-medium ${isMonthly ? "text-cool-gray" : "text-marine-blue"}`}>Yearly</button>
          </div>
     )
}

export default BillingToggle