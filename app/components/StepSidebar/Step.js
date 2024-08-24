import React from 'react'

const Step = ({ stepName, stepInfo }) => {
     return (
          <div className='flex text-xs ml-4 mt-6'>
               <div className='text-black font-bold bg-light-blue px-3.5 py-2 pt-2.5 rounded-full mr-2'>{stepName}</div>
               <div>
                    <div className='text-light-gray font-light mb-1'>STEP {stepName}</div>
                    <div className='text-white font-bold'>{stepInfo}</div>
               </div>
          </div>
     )
}

export default Step