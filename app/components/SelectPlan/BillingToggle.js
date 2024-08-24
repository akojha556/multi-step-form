import React from 'react'

const BillingToggle = () => {
     return (
          <div className="flex justify-between bg-gray-100/50 rounded-lg mt-4 p-4 px-[6rem]">
               <button className="font-medium">Monthly</button>
               <div className="bg-marine-blue w-8 h-4 rounded-3xl mx-4 relative">
                    <div className="w-3 h-3 rounded-full bg-white absolute top-0.5 left-0.5 transition-transform ease-in-out"></div>
               </div>
               <button className="font-medium text-cool-gray">Yearly</button>
          </div>
     )
}

export default BillingToggle